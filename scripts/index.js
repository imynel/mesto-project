// Для открытия и закрытия попапа
let profileButton = document.querySelector('.profile__button') // для открытия кнопки редактирования
let addCardButton = document.querySelector('.profile__add-button') // для открытия попапа добавления карточек
let popupProfile = document.querySelector('.popup-profile')
let popupCards = document.querySelector('.popup-cards')
let closeButtonProfile = popupProfile.querySelector('.popup__close-image')
let closeButtonCards = popupCards.querySelector('.popup__close-image')
// Редактирование имени и информации о себе
const formElementProfile = popupProfile.querySelector('.popup__form')
const nameInput = formElementProfile.querySelector('.name_input')
const jobInput = formElementProfile.querySelector('.job_input')
const formElementCards = popupCards.querySelector('.popup__form')
const placInpur = formElementCards.querySelector('.name_place')
const linkInput = formElementCards.querySelector('.name_link')
const nameProfile = document.querySelector('.profile__name')
const jobProfile = document.querySelector('.profile__text')

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

closeButtonProfile.addEventListener('click', () => {
  closedPopup(popupProfile)
})

closeButtonCards.addEventListener('click', () => {
  closedPopup(popupCards)
})

function handleFormSubmit(evt) {
  evt.preventDefault()

  nameProfile.textContent = nameInput.value
  jobProfile.textContent = jobInput.value

  closedPopup(popupProfile)
}
formElementProfile.addEventListener('submit', handleFormSubmit)
// formElementCards.addEventListener('submit', handleFormSubmit)
