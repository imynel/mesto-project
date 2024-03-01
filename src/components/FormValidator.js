export default class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._form = formElement;
    this._inputArr = Array.from(this._form.querySelectorAll(this._config.inputSelector));
    this._formButton = this._form.querySelector(this._config.submitButtonSelector);
  }

  _showInputError(formInput, errorMessage) {
    const formError = this._form.querySelector(`.${formInput.id}-error`);
    formInput.classList.add(this._config.inputErrorClass);
    formError.textContent = errorMessage;
    formError.classList.add(this._config.errorClass);
  };

  //какие то изменения

  _hideInputError(formInput) {
  const formError = this._form.querySelector(`.${formInput.id}-error`);
  formInput.classList.remove(this._config.inputErrorClass);
  formError.classList.remove(this._config.errorClass);
  formError.textContent = '';
  };

  _isValid(formInput) {
    if (formInput.validity.patternMismatch) {
      formInput.setCustomValidity(formInput.dataset.errorMessage);
    } else {
      formInput.setCustomValidity("");
    }

    if (!formInput.validity.valid) {
      this._showInputError(formInput, formInput.validationMessage);
    } else {
      this._hideInputError(formInput);
    }
  };

  _hasInvalidInput() {
    return this._inputArr.some((formInput) => {
      return !formInput.validity.valid;
    })
  };

  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputArr)) {
      this._formButton.disabled = true;
      this._formButton.classList.add(this._config.inactiveButtonClass);
    } else {
      this._formButton.disabled = false;
      this._formButton.classList.remove(this._config.inactiveButtonClass);
    }
  };

  _handleFormInputs() {
    this._toggleButtonState(this._inputArr, this._formButton);
    this._form.addEventListener('reset', () => {
      setTimeout(() => {
        this._toggleButtonState(this._inputArr, this._formButton);
      }, 0);
    });

    this._inputArr.forEach((formInput) => {
    formInput.addEventListener('input', () => {
      this._isValid(formInput);
      this._toggleButtonState(this._inputArr, this._formButton);
      });
    });
  };


  enableValidation() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
      this._handleFormInputs(this._form);
  };
}
