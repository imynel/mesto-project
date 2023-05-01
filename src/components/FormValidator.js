class FormValidator {
  constructor(config, form) {
    this._config = config;
    this._form = form;
    this._inputList = Array.from(this._form.querySelectorAll(this._config.inputSelector));
    this._buttonElement = this._form.querySelector(this._config.submitButtonSelector);
  }

 _hasInvalidInput() {
  return this._inputList.some((inputElement) => {
    return !inputElement.validity.valid
  })
}

_toggleButtonState() {
  if (_hasInvalidInput()) {
    this._buttonElement.disabled = true
    this._buttonElement.classList.add(config.inactiveButtonClass)
  } else {
    this._buttonElement.disabled = false
    this._buttonElement.classList.remove(config.inactiveButtonClass)
  }
}

_showInputError(formInput, errorMessage) {
  const errorElement = this._form.querySelector(`.${formInput.id}-error`);
  formInput.classList.add(this._config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(this._settings.errorClass);
}

_hideInputError(formInput) {
  const errorElement = this._form.querySelector(`.${formInput.id}-error`);
  formInput.classList.remove(this._config.inputErrorClass);
  errorElement.classList.remove(this._settings.errorClass);
  errorElement.textContent = '';
}

_isValid = (formInput) => {
  if (formInput.validity.patternMismatch) {
    formInput.setCustomValidity(formInput.dataset.errorMessage);
  } else {
    formInput.setCustomValidity("");
  }

  if(!formInput.validity.valid) {
  this._showInputError(formInput, formInput.validationMessage)
  } else {
    this._hideInputError(formInput)
  }
}

_setEventListeners() {
  this._toggleButtonState()
  this._inputList.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      this._isValid(inputElement);
      this._toggleButtonState();
    })
  })
}

enableValidation() {
  this._setEventListeners();
}
}
