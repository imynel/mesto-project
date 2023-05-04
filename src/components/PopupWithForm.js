import Popup from "./popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, popupOpen, Socallback) {
    super(popupSelector, popupOpen);
    this._callback = Socallback;
    this._form = this.popup.querySelector('.popup__form')
    this._inputs = this._form.querySelectorAll('.popup__input')
    this._inputValues = {}
  }

  _getInputValues() {
    this._inputs.forEach((input) => {
      this._inputValues[input.name] = input.value;
    })
    console.log(this._inputValues)
    return this._inputValues;

  }

 _submitEvtHandler() {
  // this.setBtnStatus(true)
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
      this._submitEvtHandler()}
    )
  }
}

