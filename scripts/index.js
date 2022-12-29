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
const closeButtonImage = popupImage.querySelector('.popup__close-image')
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
  let heartCard = cardAdd.querySelector('.card__heart')
  heartCard.addEventListener('click', () => heartCard.classList.toggle('card__heart_active'))

  sectionCards.prepend(cardAdd)  

  let trashCard = cardAdd.querySelector('.card__trash')
  trashCard.addEventListener('click', () => cardAdd.remove())

  let imageCard = cardAdd.querySelector('.card__image')
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
  
  let linkCard = linkInput.value
  let placeCard = placeInput.value

  createCards(placeCard, linkCard)  

  closedPopup(popupCards)

  placeInput.value = ''
  linkInput.value = ''
}

// Функция добавления карточек из файла 
function addCrads() { 
  initialCards.forEach(element => {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true)
    cardElement.querySelector('.card__heading').textContent = element.name
    cardElement.querySelector('.card__image').src = element.link
    cardElement.querySelector('.card__image').alt = element.name
    sectionCards.append(cardElement)

    const buttonLike = cardElement.querySelector('.card__heart')
    buttonLike.addEventListener('click', () => buttonLike.classList.toggle('card__heart_active'))

    let trashCard = cardElement.querySelector('.card__trash')
    trashCard.addEventListener('click', () => cardElement.remove())

    let imageCard = cardElement.querySelector('.card__image')
    imageCard.addEventListener('click', () => {
      
      popupTitle.textContent = cardElement.querySelector('.card__heading').textContent
      imagePopup.src = cardElement.querySelector('.card__image').src  
      imagePopup.alt = popupTitle.textContent
      openedPopup(popupImage)
      }
    )
  })
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

closeButtonImage.addEventListener('click', () => {
  closedPopup(popupImage)
})

formElementCards.addEventListener('submit', handleFormSubmitCards)
formElementProfile.addEventListener('submit', handleFormSubmitProfile)



