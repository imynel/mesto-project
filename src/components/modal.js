
function openPopup(popup) {
  popup.classList.add('popup_opened')
  document.addEventListener('keydown', closeByEsc)
  document.addEventListener('mousedown', closeByOverlayClick)

}


function closePopup(popup) {
    popup.classList.remove('popup_opened')
    popup.removeEventListener('keydown', closeByEsc)
    popup.removeEventListener('mousedown', closeByOverlayClick)
}

function closeByEsc(evt) {
  if (evt.key === "Escape") {
      const openedPopup = document.querySelector(".popup_opened")
      closePopup(openedPopup)
  }
}

function closeByOverlayClick(evt) {
  if (evt.target.classList.contains('popup_opened')) {
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

export {
    openPopup,
    closePopup,
    closeByEsc,
    closeByOverlayClick,
    renderLoading,
}
