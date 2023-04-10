import './api.js'
import { gitInitialCards, changeAvatar } from './api.js'
import '../pages/index.css';
import {openPopup, closePopup, closeByEsc, closeByOverlayClick} from './modal.js'
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
  initialCards,
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
  avatarInput
} from './consts.js'


// function addCards() {
//   initialCards.forEach(element => {
//     const card = createCard(element.name, element.link)
//     renderCard(card, sectionCards)
//   })
// }
// addCards()

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

formElementCards.addEventListener('submit', () => {
  gitInitialCards()
  .then(() => {
    handleFormSubmitCards()
  })
  .catch(err => console.log(`Ошибка - ${err}`))
})

formElementProfile.addEventListener('submit', handleFormSubmitProfile)
formElementAvatar.addEventListener('submit', () => {
  changeAvatar(avatarInput.value)
  .then(data => {
    console.log(avatarInput.value)
    buttonAvatar.style.backgroundImage = `url('${avatarInput.value}')`
    console.log(buttonAvatar)
    handleFormSubmitAvatar()
  })
})

