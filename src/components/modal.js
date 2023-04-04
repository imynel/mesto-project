import {
    popupImage,
    popupCards,
    popupProfile
} from './consts.js'
import {handleDocumentClick} from './index.js'
function openedPopup(popup) {
  popup.classList.add('popup_opened')
}
  
function closePopups() {
  closedPopup(popupImage);
  closedPopup(popupCards);
  closedPopup(popupProfile);
  document.removeEventListener('click', handleDocumentClick);
}
function closedPopup(popup) {
    popup.classList.remove('popup_opened')
    document.addEventListener('click', handleDocumentClick)
}

function closeByEsc(evt, popup) {
  if (evt.key === "Escape") {
    closedPopup(popup)
    evt.target.removeEventListener('keydown', closeByEsc)
  }
}

export {
    openedPopup, 
    closedPopup, 
    closeByEsc,
    closePopups,
}