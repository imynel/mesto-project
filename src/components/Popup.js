//создаем новый класс попап
export default class Popup {
  constructor(popupSelector) {
    this.popup = document.getElementById(popupSelector);
    this._handleEscCloseBound = this._handleEscClose.bind(this);
  }

  open () {
    this.popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscCloseBound);
  }

  close () {
    this.popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscCloseBound);
  }

  _handleEscClose(event) {
    if (event.key === 'Escape') {
      this.close()
    }
  }

  setEventListeners () {
    this.popup.querySelector('.popup__close-button')
    .addEventListener('click', this.close.bind(this));

    this.popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup')) {
        this.close();
      }
    })
  }
}

