import { buttonClosePopupImage } from './consts.js'

export default class Card {
<<<<<<< HEAD
  constructor({card, user,title, link}, templateSelector) {
=======
  constructor({item}, {title, link}, templateSelector) {
>>>>>>> e56a2e18b52750d13d4fad0fa2bd557d0f711ae1
    this.title = title
    this.link = link
    this.templateSelector = templateSelector
    this.owner = item.owner
    // this.trash = item.trash
  }

  _getElement() {
    const cardTemplate = document.querySelector(this.templateSelector).content.querySelector('.card').cloneNode(true)
    return cardTemplate
  }

  generate() {
    this._element = this._getElement()
    this._setEventListeners()

    const heartCard = this._element.querySelector('.card__heart')
    const countLikes = this._element.querySelector('.card__count-heart')
    this.trash = this._element.querySelector('.card__trash')

    this._element.querySelector('.card__heading').textContent = this.title
    this._element.querySelector('.card__image').src = this.link
    this._element.querySelector('.card__image').alt = this.title

<<<<<<< HEAD
    //удаление мусорки у чужих карточек
    if(this.card.owner._id !== this.user) {
      this.trash.remove()
    }

    //проверка на установку своего лайка
    this._myLike(card.likes, heartCard)

    //установка количества лайков
    this._setLikes(card.likes, countLikes)
=======
    if(this._element.o)

>>>>>>> e56a2e18b52750d13d4fad0fa2bd557d0f711ae1

    return this._element
  }

  _handleOpenPopup() {
    imagePopup.src = cardInfo.src
    imagePopup.alt = popupTitle.textContent
    popup.classList.add('popup_opened')
  }

  _handleClosePopup() {
    imagePopup.src = ''
    imagePopup.alt = ''
    popup.classList.remove('popup_opened')
  }

<<<<<<< HEAD
  _myLike(likes, button) {
    likes.forEach(element => {
      if (element._id === user._id) {
        button.classList.add('card__heart_active')
      }
  })
  }

  _setLikes(likes, number) {
    if (likes.length > 0) {
      number.textContent = likes.length
    }
    else number.textContent = '0'
  }

=======
>>>>>>> e56a2e18b52750d13d4fad0fa2bd557d0f711ae1
  _setEventListeners() {
    this._element.addEventListener('click', () => {
      this._handleOpenPopup()
    })

    buttonClosePopupImage.addEventListener('click', () => {
      this._handleClosePopup()
    })
  }
}
