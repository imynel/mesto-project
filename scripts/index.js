// Для открытия и закрытия попапа
const profileButton = document.querySelector('.profile__button') // для открытия кнопки редактирования
const addCardButton = document.querySelector('.profile__add-button') // для открытия попапа добавления карточек
const popupProfile = document.querySelector('.popup-profile')
const popupCards = document.querySelector('.popup-cards')
const closeButtonProfile = popupProfile.querySelector('.popup__close-image')
const closeButtonCards = popupCards.querySelector('.popup__close-image')
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
const sectionCards = document.querySelector('.cards')
const cardTemplate = document.querySelector('#card').content
// Лайк карточки
// увеличение карточки
const popupImage = document.querySelector('.popup-image')
const imagePopup = document.querySelector('.popup-image__image')
const closeButtonImage = popupImage.querySelector('.popup__close-image')
const popupTitle = popupImage.querySelector('.popup-image__title')

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

function handleFormSubmitProfile(evt) {
  evt.preventDefault()

  nameProfile.textContent = nameInput.value
  jobProfile.textContent = jobInput.value

  closedPopup(popupProfile)
}
formElementProfile.addEventListener('submit', handleFormSubmitProfile)

function handleFormSubmitCards(evt) {
  evt.preventDefault() 

  initialCards.unshift({name: placeInput.value, link: linkInput.value})

  const cardAdd = cardTemplate.querySelector('.card').cloneNode(true)
  
  cardAdd.querySelector('.card__image').src = initialCards[0].link
  cardAdd.querySelector('.card__heading').textContent = initialCards[0].name
  sectionCards.prepend(cardAdd)  
  
  placeInput.value = ''
  linkInput.value = ''

  closedPopup(popupCards)
}
formElementCards.addEventListener('submit', handleFormSubmitCards)


function addCrads() { 
  initialCards.forEach(element => {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true)
    cardElement.querySelector('.card__heading').textContent = element.name
    cardElement.querySelector('.card__image').src = element.link
    sectionCards.append(cardElement)
  })
}
addCrads()

sectionCards.addEventListener('click', (event) => {

  if (event.target.classList[0] === 'card__heart') {
    event.target.classList.toggle('card__heart_active')
  }
})

sectionCards.addEventListener('click', (event) => {

  if (event.target.classList[0] === 'card__trash') {
    const deleteCard = event.target.closest('.card')
    deleteCard.remove()
  }
})

// увеличение картинки

sectionCards.addEventListener('click', elm => {
  if (elm.target.classList[0] === 'card__image') {
    const containerPopup = elm.target.nextElementSibling
    const newTitle = containerPopup.querySelector('.card__heading').textContent
    popupTitle.textContent = newTitle
    const newImage = elm.target.src
    imagePopup.src = newImage
    openedPopup(popupImage)
  }
})

closeButtonImage.addEventListener('click', () => {
  closedPopup(popupImage)
})
