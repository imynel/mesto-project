import { buttonClosePopupImage } from './consts.js'

export default class Card {
  constructor(card, user, templateSelector, {deleteClickCard, deleteHandle, putHandle}) {
    this.card = card
    this.user = user
    this.templateSelector = templateSelector
    // this.openImage = handleCardClick
    this.deleteCardHandle = deleteClickCard
    this.deleteLikeHandle = deleteHandle
    this.putLikeHandle = putHandle
  }

  _getElement() {
    const cardTemplate = document.querySelector(this.templateSelector).content.querySelector('.card').cloneNode(true)
    return cardTemplate
  }

  _isLiked() {
    return this._isLiked;
  }

  _setLikes = () => {
    if (this._isLiked) {
      this.deleteLikeHandle(this.card._id, this.heartCard, this.countLikes)
      this._isLiked = false;
    }

    else{
      this.putLikeHandle(this.card._id, this.heartCard, this.countLikes)
      this._isLiked = true;
    }
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

  _setEventListeners() {
    this.trash.addEventListener('click', () => this.deleteCardHandle(this._element, this.card._id))
    this._element.addEventListener('click', () => {
      this._handleCardClick()
    })

    // this._element.querySelector('.card__trash').addEventListener('click', () => {
    //   this.deleteCard()
    // })

    this.heartCard.addEventListener('click',() => this._setLikes())

    buttonClosePopupImage.addEventListener('click', () => {
      this._handleClosePopup()
    })
  }

  // _isLiked() {
  //   return this._isLiked;
  // }


  // deleteCard() {
  //   this._element.remove()
  // }

  generate() {
    this._element = this._getElement()


    this.heartCard = this._element.querySelector('.card__heart')
    this.countLikes = this._element.querySelector('.card__count-heart')
    this.trash = this._element.querySelector('.card__trash')

    this._element.querySelector('.card__heading').textContent = this.card.name
    this._element.querySelector('.card__image').src = this.card.link
    this._element.querySelector('.card__image').alt = this.name
    this._isLiked = this.card.likes.filter((item) => {
      return item._id == this.user._id
    })
    //удаление мусорки у чужих карточек
    if(this.card.owner._id !== this.user) {
      this.trash.remove()
    }

// this.deleteLikeHandle()

    //проверка на установку своего лайка
    // this._myLike(card.likes, heartCard)

    // //установка количества лайков
    // this._setLikes(card.likes, countLikes)

    this._setEventListeners()

    return this._element
  }
}
