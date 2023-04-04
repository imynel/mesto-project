import '../pages/index.css';
import {openedPopup, closedPopup, closeByEsc, closePopups} from './modal.js'
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

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}); 

function handleDocumentClick(elm) {
  if (elm.target.classList.value.includes('popup_opened')) {
    closePopups()
  }
}


document.addEventListener('click', handleDocumentClick)


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

document.addEventListener('keydown', function(evt) {
  closeByEsc(evt, document.querySelector('.popup-image'));
  closeByEsc(evt, document.querySelector('.popup-cards'));
  closeByEsc(evt, document.querySelector('.popup-profile'));
});

formElementCards.addEventListener('submit', handleFormSubmitCards)
formElementProfile.addEventListener('submit', handleFormSubmitProfile)

export { handleDocumentClick }
