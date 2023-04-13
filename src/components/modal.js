import { popups } from './consts.js'
function openPopup(popup) {
  popup.classList.add('popup_opened')
  document.addEventListener('keydown', closeByEsc)
}


function closePopup(popup) {
    popup.classList.remove('popup_opened')
    document.removeEventListener('keydown', closeByEsc)
}

function closeByEsc(evt) {
  if (evt.key === "Escape") {
      const openedPopup = document.querySelector(".popup_opened")
      closePopup(openedPopup)
  }
}

function renderLoading(isLoad, evt) {
  const buttonLoading = evt.target.querySelector('.popup__button')
  if(isLoad) {
    buttonLoading.textContent = buttonLoading.dataset.value
  } else {
    buttonLoading.textContent = buttonLoading.value
  }
}

popups.forEach(element => {
  element.addEventListener('mousedown',  evt => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(element)
    }
  })
});

export {
    openPopup,
    closePopup,
    closeByEsc,
    renderLoading,
}
