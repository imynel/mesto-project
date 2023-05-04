import '../pages/index.css';
import {
  buttonOpenPopupCard,
  buttonOpenPopupProfile,
  buttonClosePopupCards,
  buttonClosePopupProfile,
  buttonClosePopupImage,
  nameInput,
  nameProfile,
  jobInput,
  jobProfile,
  placeInput,
  linkInput,
  buttonClosePopupAvatar,
  buttonAvatar,
  sectionCards,
  avatarImage,
  templateSelector,
  settings,
} from './consts.js'

// **************** ИМПОРТ ВСЕХ КЛАССОВ ****************
import Api from './Api.js';
import UserInfo from './UserInfo.js';
import FormValidator from './FormValidator.js';
import Section from './Section.js';
import Card from "./Card.js";
import PopupWithForm from './PopupWithForm.js'
import PopupWithImage from './PopupWithImage.js'

// создаем экземпляр апи, потом вызываем его с нужными методами
const api = new Api ({
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-22',
  headers: {
    authorization: '19feaa3d-4124-4771-a3db-87bef0dcd15a',
    'Content-Type': 'application/json'
  }
})

// СОЗДАЁМ ЭКЗЕМПЛЯРЫ КЛАССОВ
const cardValidation = new FormValidator(settings, document.querySelector('#form-cards'))
const profileValidation = new FormValidator(settings, document.querySelector('#form-profile'))
const avatarValidation = new FormValidator(settings, document.querySelector('#form-avatar'))
const imagePopup = new PopupWithImage("popup-image", "popup_opened");
const userInfo = new UserInfo(nameProfile,jobProfile, avatarImage);
const section = new Section({
  renderer: (card) => {
    const newItem = addNewCard(card);
    return newItem;
  }
}, sectionCards)

const popupCard = new PopupWithForm('popup-cards', 'popup_opened', (values) =>
  {
  const data = {};
  data.name = values.titleinput
  data.link = values.linkinput
    api.gitInitialCards(data)
      .then(res => {
        popupCard.setBtnStatus(true)
        section.addItem(addNewCard(res, userInfo._userId))
        popupCard.close()
      })
      .catch(err => console.log(`Ошибка - ${err.status}`))
      .finally(() => popupCard.setBtnStatus(false))
  }
)

const popupInfo = new PopupWithForm('popup-profile', 'popup_opened', (values) =>
  {
  const data = {};
  data.name = values.yourname
  data.about = values.aboutyou
    api.patchRequestPrifile(data)
      .then((res) => {
        popupInfo.setBtnStatus(true)
        userInfo.setUserInfo(res)
        popupInfo.close()
      })
      .catch(err => console.log(`Ошибка - ${err.status}`))
      .finally(() => popupInfo.setBtnStatus(false))
  }
)

const popupChangeAvatar = new PopupWithForm('popup-avatar', 'popup_opened', (values) => {

  api.changeAvatar(values)
    .then(res => {
      popupChangeAvatar.setBtnStatus(true)
      userInfo.setUserInfo(res)
      popupChangeAvatar.close()
    })

    .catch(err => console.log(`Ошибка - ${err.status}`))
    .finally(() => popupChangeAvatar.setBtnStatus(false))
})

Promise.all([api.getInitialCards(), api.getResponsInfo()])
  .then(([cards, user]) => {
    userInfo.setUserInfo(user)
    section.rendererElement(cards, user._id)
  })
  .catch(err => console.log(`Ошибка - ${err.status}`))

// ФУНКЦИИ ДЛЯ addNewCard
//удаление карточки с апи
function deleteCard(card, cardId) {
  api.deleteRequestCard(cardId)
  .then(() => {
    card.remove()
  })
  .catch(err => console.log(`Ошибка - ${err.status}`))
}

//удаление лайка с апи
function deleteLike(id,button, likeCounter) {
  api.deleteRequestCardId(id)
  .then((res) => {
    button.classList.remove('card__heart_active')
    likeCounter.textContent = res.likes.length
  })
  .catch(err => console.log(`Ошибка - ${err.status}`))
}

//установка лайка с апи
function putLike(id,button, likeCounter) {
  api.putRequestCardsLikesID(id)
  .then((res) => {
    button.classList.add('card__heart_active')
    likeCounter.textContent = res.likes.length
  })
  .catch(err => console.log(`Ошибка - ${err.status}`))
}

// СОЗДАНИЕ КАРТОЧКИ СО СЛУШАТЕЛЯМИ
function addNewCard (card) {
  const newCard = new Card(card, userInfo._userId, templateSelector, {
    handleCardClick: (link, name) => {
      imagePopup.open(link, name)
    },
    removeCard: deleteCard,
    deleteHandle: deleteLike,
    putHandle: putLike,
  })
  const cardElement = newCard.generate();
  return cardElement
}

// ЗАПУСК ВАЛИДАЦИИ
cardValidation.enableValidation()
profileValidation.enableValidation()
avatarValidation.enableValidation()

// ЗАПУСК СЛУШАТЕЛЕЙ
imagePopup.setEventListeners()
popupCard.setEventListeners()
popupInfo.setEventListeners()
popupChangeAvatar.setEventListeners()


// слушатели
buttonOpenPopupProfile.addEventListener('click', () => {
  nameInput.value = nameProfile.textContent
  jobInput.value = jobProfile.textContent
  popupInfo.open()
})

buttonOpenPopupCard.addEventListener('click', () => {
  placeInput.value = ''
  linkInput.value = ''
  popupCard.open()
})

buttonAvatar.addEventListener('click', () => {
  popupChangeAvatar.open()
})

buttonClosePopupProfile.addEventListener('click', () => {
  popupInfo.close()
})

buttonClosePopupCards.addEventListener('click', () => {
  popupCard.close()
})

buttonClosePopupImage.addEventListener('click', () => {
  imagePopup.close()
})

buttonClosePopupAvatar.addEventListener('click', () => {
  popupChangeAvatar.close()
})


