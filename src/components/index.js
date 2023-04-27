import '../pages/index.css';
import { getRequestCards, getRequestUsersMe } from './api.js'
import { createCard, renderCard } from './card.js'
import {openPopup, closePopup} from './modal.js'
import {enableValidation} from './valid.js'
import {handleFormSubmitProfile, handleFormSubmitCards, handleFormSubmitAvatar} from './utils.js'
import {
  buttonOpenPopupCard,
  buttonOpenPopupProfile,
  buttonClosePopupCards,
  buttonClosePopupProfile,
  buttonClosePopupImage,
  formElementCards,
  formElementProfile,
  popupImage,
  popupCards,
  popupProfile,
  nameInput,
  nameProfile,
  jobInput,
  jobProfile,
  placeInput,
  linkInput,
  popupAvatar,
  buttonClosePopupAvatar,
  buttonAvatar,
  formElementAvatar,
  sectionCards,
  avatarImage,
  id,
} from './consts.js'
import Api from './classApi.js';


const api = new Api ({
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-22',
  headers: {
    authorization: '19feaa3d-4124-4771-a3db-87bef0dcd15a',
    'Content-Type': 'application/json'
  }
})

api.getInitialCards()
api.getResponsInfo()

Promise.all([getRequestUsersMe(), getRequestCards()])
  .then(([info, cards]) => {
    nameProfile.textContent = info.name
    jobProfile.textContent = info.about
    avatarImage.src = info.avatar
    id.id = info._id
    console.log(id)
    cards.forEach(element => {
      const cardElemnt = createCard(element)
      renderCard(cardElemnt, sectionCards)
    })
  })
  .catch(err => console.log(err))


enableValidation({
  formSelector: '.form',
  inputSelector: '.form-input',
  submitButtonSelector: '.form__submit',
  inactiveButtonClass: 'form__submit_inactive',
  inputErrorClass: 'form__input_type-error',
  errorClass: 'form__input-error_active',
});

// слушатели
buttonOpenPopupProfile.addEventListener('click', () => {

  nameInput.value = nameProfile.textContent
  jobInput.value = jobProfile.textContent

  openPopup(popupProfile)
})

buttonOpenPopupCard.addEventListener('click', () => {
  placeInput.value = ''
  linkInput.value = ''
  openPopup(popupCards)
})

buttonAvatar.addEventListener('click', () => {
  openPopup(popupAvatar)
})

buttonClosePopupProfile.addEventListener('click', () => {
  closePopup(popupProfile)
})

buttonClosePopupCards.addEventListener('click', () => {
  closePopup(popupCards)
})

buttonClosePopupImage.addEventListener('click', () => {
  closePopup(popupImage)
})

buttonClosePopupAvatar.addEventListener('click', () => {
  closePopup(popupAvatar)
})

formElementCards.addEventListener('submit', handleFormSubmitCards)
formElementProfile.addEventListener('submit', handleFormSubmitProfile)
formElementAvatar.addEventListener('submit', handleFormSubmitAvatar)
