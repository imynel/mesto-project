import {
    popupImage,
    popupCards,
    popupProfile
} from './consts.js'

function openedPopup(popup) {
    popup.classList.add('popup_opened')
}
  
function closedPopup(popup) {
    popup.classList.remove('popup_opened')
}

function keyDownEsc(evt) {
  if (evt.key === "Escape") {
    closedPopup(popupImage)
    closedPopup(popupCards)
    closedPopup(popupProfile)
  }
}

export {
    openedPopup, 
    closedPopup, 
    keyDownEsc
}