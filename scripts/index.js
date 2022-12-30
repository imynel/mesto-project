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
const sectionCards = document.querySelector('.cards')
const cardTemplate = document.querySelector('#card').content

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

// Функция создания карточки
function createCards(name, link) {
  const cardAdd = cardTemplate.querySelector('.card').cloneNode(true)

  cardAdd.querySelector('.card__heading').textContent = name
  cardAdd.querySelector('.card__image').src = link
  cardAdd.querySelector('.card__image').alt = name
  const heartCard = cardAdd.querySelector('.card__heart')
  heartCard.addEventListener('click', () => heartCard.classList.toggle('card__heart_active'))

  sectionCards.prepend(cardAdd)  

  const trashCard = cardAdd.querySelector('.card__trash')
  trashCard.addEventListener('click', () => cardAdd.remove())

  const imageCard = cardAdd.querySelector('.card__image')
    imageCard.addEventListener('click', () => {
      
      popupTitle.textContent = cardAdd.querySelector('.card__heading').textContent
      imagePopup.src = cardAdd.querySelector('.card__image').src  
      imagePopup.alt = popupTitle.textContent
      openedPopup(popupImage)
    }
  )
    
  return cardAdd
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

// Функция добавления карточек из файла 
function addCrads() { 
  initialCards.forEach(element => createCards(element.name, element.link))
}
addCrads()

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



