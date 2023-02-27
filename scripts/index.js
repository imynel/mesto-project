import { createCards } from './createCard.js'

// Для открытия и закрытия попапа
const buttonOpenPopupProfile = document.querySelector('.profile__button') // для открытия кнопки редактирования
const buttonOpenPopupCard = document.querySelector('.profile__add-button') // для открытия попапа добавления карточек
const popupProfile = document.querySelector('.popup-profile')
const popupCards = document.querySelector('.popup-cards')
const buttonClosePopupProfile = popupProfile.querySelector('.popup__close-image')
const buttonClosePopupCards = popupCards.querySelector('.popup__close-image')
// Редактирование имени и информации о себе
const formElementProfile = popupProfile.querySelector('.popup__form')
const nameInput = formElementProfile.querySelector('.name_input')
const jobInput = formElementProfile.querySelector('.job_input')
const formElementCards = popupCards.querySelector('.popup__form')
const nameProfile = document.querySelector('.profile__name')
const jobProfile = document.querySelector('.profile__text')
// Добавление карточки 
const placeInput = formElementCards.querySelector('.name_place')
const linkInput = formElementCards.querySelector('.name_link')


// увеличение карточки
const popupImage = document.querySelector('.popup-image')
const imagePopup = popupImage.querySelector('.popup-image__image')
const buttonClosePopupImage = popupImage.querySelector('.popup__close-image')
const popupTitle = popupImage.querySelector('.popup-image__title')

// Функции
function openedPopup(popup) {
  popup.classList.add('popup_opened')
}

function closedPopup(popup) {
  popup.classList.remove('popup_opened')
}

// Функция отправления формы профиля
function handleFormSubmitProfile(evt) {
  evt.preventDefault()

  nameProfile.textContent = nameInput.value
  jobProfile.textContent = jobInput.value

  closedPopup(popupProfile)
}



document.addEventListener('keydown', keyDownEsc)

function keyDownEsc(evt) {
  if (evt.key === "Escape") {
    closedPopup(popupImage)
    closedPopup(popupCards)
    closedPopup(popupProfile)
  }
}

// Функция отправления формы карточки
function handleFormSubmitCards(evt) {
  evt.preventDefault() 
  
  const linkCard = linkInput.value
  const placeCard = placeInput.value

  createCards(placeCard, linkCard)  

  closedPopup(popupCards)

  placeInput.value = ''
  linkInput.value = ''
}



// слушатели
buttonOpenPopupProfile.addEventListener('click', () => {
  openedPopup(popupProfile)
})

buttonOpenPopupCard.addEventListener('click', () => {
  openedPopup(popupCards)
})

buttonClosePopupProfile.addEventListener('click', () => {
  closedPopup(popupProfile)
})

buttonClosePopupCards.addEventListener('click', () => {
  closedPopup(popupCards)
})

buttonClosePopupImage.addEventListener('click', () => {
  closedPopup(popupImage)
})

formElementCards.addEventListener('submit', handleFormSubmitCards)
formElementProfile.addEventListener('submit', handleFormSubmitProfile)



