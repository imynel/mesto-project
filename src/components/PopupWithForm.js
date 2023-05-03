import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({popup, callback}) {
    super(popup);
    this._callback = callback;
    this._form = this._popup.querySelector('.popup__form');
    this._inputs = this._form.querySelectorAll('.popup__input')
  }

  _getInputValues() {
    const inputValues = {};
    this._inputs.forEach(input => {
      inputValues[input.name] = input.value;
    })
    return inputValues;
  }

  close() {
    super.close()
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners()
    this._popup.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._callback(this._getInputValues());
    })
  }
}
