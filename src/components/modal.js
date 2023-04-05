
function openPopup(popup) {
  popup.classList.add('popup_opened')
  document.addEventListener('keydown', closeByEsc)
  document.addEventListener('mousedown', closeByOverlayClick)

}
  

function closePopup(popup) {
    popup.classList.remove('popup_opened')
    document.removeEventListener('keydown', closeByEsc)
    document.removeEventListener('mousedown', closeByOverlayClick)
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

export {
    openPopup, 
    closePopup, 
    closeByEsc,
    closeByOverlayClick,
}