import {openPopup} from './modal.js'
import {
    popupTitle,
    popupImage,
    imagePopup,
    sectionCards
} from './consts.js'

function createTemplate() {
  
  return  //НАДЕЮСЬ СДЕЛАЛ ТАК
}

function renderCard(card, container) {
  container.prepend(card)
}

function createCard(name, link) {
    const cardTemplate = document.querySelector('#card').content
    
    const cardAdd = cardTemplate.querySelector('.card').cloneNode(true)
    
  
    cardAdd.querySelector('.card__heading').textContent = name
    const cardInfo = cardAdd.querySelector('.card__image')
    cardInfo.src = link
    cardInfo.alt = name
    
    const heartCard = cardAdd.querySelector('.card__heart')
    heartCard.addEventListener('click', () => heartCard.classList.toggle('card__heart_active'))
  
    const trashCard = cardAdd.querySelector('.card__trash')
    trashCard.addEventListener('click', () => cardAdd.remove())
  
    const imageCard = cardInfo
    console.log(cardInfo)
      imageCard.addEventListener('click', () => {
        popupTitle.textContent = cardAdd.querySelector('.card__heading').textContent
        imagePopup.src = cardInfo.src  
        imagePopup.alt = popupTitle.textContent
        openPopup(popupImage)
      }
    )

    return cardAdd
}

  
export { createCard, renderCard }