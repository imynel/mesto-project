import createCards from './card.js'
import {closedPopup} from './modal.js'
import {
    nameProfile,
    nameInput,
    jobProfile,
    jobInput,
    placeInput,
    linkInput,
    popupCards,
    popupProfile,
} from './consts.js'

function handleFormSubmitProfile(evt) {
    evt.preventDefault()
  
    nameProfile.textContent = nameInput.value
    jobProfile.textContent = jobInput.value
  
    closedPopup(popupProfile)
}

function handleFormSubmitCards(evt) {
    evt.preventDefault() 
    
    const linkCard = linkInput.value
    const placeCard = placeInput.value
  
    createCards(placeCard, linkCard)  
  
    closedPopup(popupCards)
  
    placeInput.value = ''
    linkInput.value = ''
  }

export {handleFormSubmitProfile, handleFormSubmitCards}


// const logo = new URL('../images/logo/logo.svg', import.meta.url)
// const avatar = new URL('../images/avatar.jpg', import.meta.url)
// const closeImage = new URL('../images/logo/Close-icon.svg', import.meta.url)

// const pictures = [
//   {name: 'logo-header', image: logo},
//   {name: 'avatar', link: avatar},
//   {name: 'Close-image', link: closeImage}
// ]
// ВДРУГ ПРИГОДИТСЯ