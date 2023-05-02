import { buttonClosePopupImage } from './consts.js'

export default class Card {
  constructor(card, user, templateSelector, {handleCardClick, deleteClickCard, deletelike, putLike}) {
    this.card = card
    this.user = user
    this.templateSelector = templateSelector
    this.openImage = handleCardClick
    this.deleteCardHandle = deleteClickCard
    this.deletelikeHandle = deletelike
    this.putLikeHandle = putLike
  }

  _getElement() {
    const cardTemplate = document.querySelector(this.templateSelector).content.querySelector('.card').cloneNode(true)
    return cardTemplate
  }

  generate() {
    this._element = this._getElement()


    const heartCard = this._element.querySelector('.card__heart')
    const countLikes = this._element.querySelector('.card__count-heart')
    this.trash = this._element.querySelector('.card__trash')

    this._element.querySelector('.card__heading').textContent = this.card.name
    this._element.querySelector('.card__image').src = this.card.link
    this._element.querySelector('.card__image').alt = this.name

    //удаление мусорки у чужих карточек
    if(this.card.owner._id !== this.user) {
      this.trash.remove()
    }

    //проверка на установку своего лайка
    // this._myLike(card.likes, heartCard)

    // //установка количества лайков
    // this._setLikes(card.likes, countLikes)

    this._setEventListeners()

    return this._element
  }

  _handleCardClick() {
    imagePopup.src = cardInfo.src
    imagePopup.alt = popupTitle.textContent
    popup.classList.add('popup_opened')
  }

  _handleClosePopup() {
    imagePopup.src = ''
    imagePopup.alt = ''
    popup.classList.remove('popup_opened')
  }

  // _myLike(likes, button) {
  //   likes.forEach(element => {
  //     if (element._id === user._id) {
  //       button.classList.add('card__heart_active')
  //     }
  // })
  // }

  _setLikes(likes, number) {
    if (likes.length > 0) {
      number.textContent = likes.length
    }
    else number.textContent = '0'
  }

  // deleteCard() {
  //   this._element.remove()
  // }



  _setEventListeners() {
    this.trash.addEventListener('click', () => this.deleteCardHandle(this._element, this.card._id))
    this._element.addEventListener('click', () => {
      this._handleCardClick()
    })

    // this._element.querySelector('.card__trash').addEventListener('click', () => {
    //   this.deleteCard()
    // })

    buttonClosePopupImage.addEventListener('click', () => {
      this._handleClosePopup()
    })
  }
}
