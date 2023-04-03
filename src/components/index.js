import '../pages/index.css';
import {openedPopup, closedPopup, keyDownEsc} from './modal.js'
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
} from './consts.js'
import createCard from './card.js'

function addCards() { 
  initialCards.forEach(element => createCard(element.name, element.link))
}
addCards()

enableValidation()

document.addEventListener('click', (elm) => {
  if (elm.target.classList.value.includes('popup_opened')) {
    closedPopup(popupImage)
    closedPopup(popupCards)
    closedPopup(popupProfile)
  }
})

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

document.addEventListener('keydown', keyDownEsc)

formElementCards.addEventListener('submit', handleFormSubmitCards)
formElementProfile.addEventListener('submit', handleFormSubmitProfile)

