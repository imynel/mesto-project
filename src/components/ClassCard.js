import { buttonClosePopupImage } from './consts.js'

export default class Card {
  constructor({item}, {title, link}, templateSelector) {
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

    if(this._element.o)


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

  _setEventListeners() {
    this._element.addEventListener('click', () => {
      this._handleOpenPopup()
    })

    buttonClosePopupImage.addEventListener('click', () => {
      this._handleClosePopup()
    })
  }
}
