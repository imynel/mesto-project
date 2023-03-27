//валидация форм

function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid
    })
  }
  
  
  function toggleButtonState(inputList, buttonElement) {
    if (hasInvalidInput(inputList)) {
      buttonElement.disabled = true
      buttonElement.classList.add('form__submit_inactive')
    } else {
      buttonElement.disabled = false
      buttonElement.classList.remove('form__submit_inactive')
      
    } 
  }
  
  const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('form__input_type-error')
    errorElement.textContent = errorMessage
    errorElement.classList.add('form__input-error_active')
  }
  
  const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('form__input_type-error')
    errorElement.classList.remove('form__input-error_active')
    errorElement.textContent = '';
  }
  
  const isValid = (formElement, inputElement) => {
    if (inputElement.validity.patternMismatch) {
      // встроенный метод setCustomValidity принимает на вход строку
      // и заменяет ею стандартное сообщение об ошибке
      inputElement.setCustomValidity("Разрешены только латинские, кириллические буквы, знаки дефиса и пробелы");
    } else {
      // если передать пустую строку, то будут доступны
      // стандартные браузерные сообщения
      inputElement.setCustomValidity("");
    }
  
    if(!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage)
    } else {
      hideInputError(formElement, inputElement)
    }
  }
  const setEventListener = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.form-input'))
    const buttonElement = formElement.querySelector('.form__submit');
  
    toggleButtonState(inputList, buttonElement)
    
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        isValid(formElement, inputElement)
        toggleButtonState(inputList, buttonElement)
      })
    })
  }
  
  const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.form'))
  
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault()
      })
      
  
      setEventListener(formElement)
    })
  }

  export {enableValidation}