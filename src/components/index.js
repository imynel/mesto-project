import '../pages/index.css';
import {openPopup, closePopup, closeByEsc, closeByOverlayClick} from './modal.js'
import {enableValidation} from './valid.js'
import {handleFormSubmitProfile, handleFormSubmitCards} from './utils.js'
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
  initialCards,
  sectionCards,
  nameInput,
  nameProfile,
  jobInput,
  jobProfile,
  placeInput,
  linkInput,
} from './consts.js'
import { createCard, renderCard } from './card.js'

function addCards() { 
  initialCards.forEach(element => {
    const card = createCard(element.name, element.link)
    renderCard(card, sectionCards)
  })
}
addCards()

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

buttonClosePopupProfile.addEventListener('click', () => {
  closePopup(popupProfile)
})

buttonClosePopupCards.addEventListener('click', () => {
  closePopup(popupCards)
})

buttonClosePopupImage.addEventListener('click', () => {
  closePopup(popupImage)
})

formElementCards.addEventListener('submit', handleFormSubmitCards)
formElementProfile.addEventListener('submit', handleFormSubmitProfile)

fetch('https://nomoreparties.co/v1/plus-cohort-22/cards', {
    headers: {
        authorization: '19feaa3d-4124-4771-a3db-87bef0dcd15a'
    }
})
    .then(res => res.json())
    .then(res => {
      console.log(res)
    })