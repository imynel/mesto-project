// Функция создания карточки
export function createCards(name, link) {
    const sectionCards = document.querySelector('.cards')
    const cardTemplate = document.querySelector('#card').content
    const cardAdd = cardTemplate.querySelector('.card').cloneNode(true)
  
    cardAdd.querySelector('.card__heading').textContent = name
    cardAdd.querySelector('.card__image').src = link
    cardAdd.querySelector('.card__image').alt = name
    const heartCard = cardAdd.querySelector('.card__heart')
    heartCard.addEventListener('click', () => heartCard.classList.toggle('card__heart_active'))
  
    sectionCards.prepend(cardAdd)  
  
    const trashCard = cardAdd.querySelector('.card__trash')
    trashCard.addEventListener('click', () => cardAdd.remove())
  
    const imageCard = cardAdd.querySelector('.card__image')
      imageCard.addEventListener('click', () => {
        
        popupTitle.textContent = cardAdd.querySelector('.card__heading').textContent
        imagePopup.src = cardAdd.querySelector('.card__image').src  
        imagePopup.alt = popupTitle.textContent
        openedPopup(popupImage)
      }
    )
      
    return cardAdd
  }