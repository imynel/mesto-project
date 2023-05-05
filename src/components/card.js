
//создаем класс карточки
export default class Card {
  constructor(card, user, templateSelector, {removeCard, handleCardClick, deleteHandle, putHandle}) {
    this._card = card
    this._user = user
    this._templateSelector = templateSelector
    this._openImage = handleCardClick
    this._deleteCardHandle = removeCard
    this._deleteLikeHandle = deleteHandle
    this._putLikeHandle = putHandle
    this._likes = card.likes.length;
  }

  //получаем темплейт для создания карточки
  _getElement() {
    const cardTemplate = document.querySelector(this._templateSelector).content.querySelector('.card').cloneNode(true)
    return cardTemplate
  }

//установщик лайка и смена счетчика
  _setLikes = () => {
    if (this._isLike) {
      this._deleteLikeHandle(this._card._id, this._heartCard, this._countLikes)
      this._isLike = false;
    }

    else{
      this._putLikeHandle(this._card._id, this._heartCard, this._countLikes)
      this._isLike = true;
    }
  }

//проверка на наш лайк
  _isMyLike() {
    if(this._card.likes.length) {
      this._card.likes.forEach(item => {
        if(item._id == this._user){
          this._heartCard.classList.add('card__heart_active')
          this._isLike = true
        }
      })
    }
  }

  _setEventListeners() {

    //обработчик удаления карточки
    this._trash.addEventListener('click', () => this._deleteCardHandle(this._element, this._card._id))

    this._imageBig.addEventListener("click", () => {
      this._openImage({
        imageSrc: this._card.link,
        text: this._card.name,
      });
    })
    //установка или удаление лайка
    this._heartCard.addEventListener('click',() => this._setLikes())
  }

//создаем элемент карточки из темплейта
  generate() {
    this._element = this._getElement()
    this._heartCard = this._element.querySelector('.card__heart')
    this._countLikes = this._element.querySelector('.card__count-heart')
    this._trash = this._element.querySelector('.card__trash')
    this._imageBig = this._element.querySelector('.card__image')
    this._element.querySelector('.card__heading').textContent = this._card.name
    this._element.querySelector('.card__image').src = this._card.link
    this._element.querySelector('.card__image').alt = this.name
    this._isLike = this._card.likes.filter((item) => {
      return item._id == this._user._id
    }).length > 0;
    //удаление мусорки у чужих карточек
    if(this._card.owner._id !== this._user) {
      this._trash.remove()
    }
    this._imageBig.src = this._card.link;
    this._imageBig.alt = this._card.name;
    this._countLikes.textContent = this._likes

    this._isMyLike()

    this._setEventListeners()

    return this._element
  }
}
