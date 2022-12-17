let profileButton = document.querySelector('.profile__button') // для открытия кнопки редактирования
let addCardButton = document.querySelector('.profile__add-button') // для открытия попапа добавления карточек
let popupProfile = document.querySelector('.popup-profile')
let popupCards = document.querySelector('.popup-cards')
let closeButton = document.querySelectorAll('.popup__close-image')
console.log(closeButton)

function openedPopup(popup) {
  popup.classList.add('popup_opened')
}

function closedPopup(popup) {
  popup.classList.remove('popup_opened')
}

profileButton.addEventListener('click', () => {
  openedPopup(popupProfile)
})

addCardButton.addEventListener('click', () => {
  openedPopup(popupCards)
})

closeButton[0].addEventListener('click', () => {
  closedPopup(popupProfile)
})

closeButton[1].addEventListener('click', () => {
  closedPopup(popupCards)
})

// // открытие popup-profile
// function openedPopupProfile() {
//   return popup[0].classList.add('popup_opened')
// }

// profileButton.addEventListener('click', openedPopupProfile)

// // закрытие popup-profile
// function closedPopupProfile() {
//   return popup[0].classList.remove('popup_opened')
// }

// popupClose[0].addEventListener('click', closedPopupProfile)

// // открытие popup-cards
// function openedPopupCards() {
//   return popup[1].classList.add('popup_opened')
// }

// addCardButton.addEventListener('click', openedPopupCards)

// // закрытие popup-cards
// function closedPopupCards() {
//   return popup[1].classList.remove('popup_opened')
// }

// popupClose[1].addEventListener('click', closedPopupCards)

