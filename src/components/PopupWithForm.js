import Popup from "./popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, popupOpen, Socallback) {
    super(popupSelector, popupOpen);
    this._callback = Socallback;
    this._form = this.popup.querySelector('.popup__form')
    this._inputs = this._form.querySelectorAll('.popup__input')
    this._inputValues = {}
    this._btnSubmitPopup = this._form.querySelector('.form__submit')
  }

  _getInputValues() {
    this._inputs.forEach((input) => {
      this._inputValues[input.name] = input.value;
    })
    return this._inputValues;

  }

 _submitEvtHandler() {
  this.setBtnStatus(true)
  this._callback(this._getInputValues());
}

  close() {
    super.close()
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners()

    this.popup.addEventListener('submit', (evt) => {
      evt.preventDefault()
      this._submitEvtHandler()
    })
  }

  setBtnStatus(isLoading) {
    if (isLoading) this._btnSubmitPopup.textContent = "Сохранение..."
    else this._btnSubmitPopup.textContent = "Сохранить"
  }
}

