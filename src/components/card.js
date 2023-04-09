import {openPopup} from './modal.js'
import {
    popupTitle,
    popupImage,
    imagePopup,
    sectionCards,
    templateSelector
} from './consts.js'
import { cardId } from './api.js'



function renderCard(card, container) {
  container.prepend(card)
}

function createCard(name, link, templateSelector) {
    const cardTemplate = document.querySelector(templateSelector).content

    const cardAdd = cardTemplate.querySelector('.card').cloneNode(true)

    cardAdd.querySelector('.card__heading').textContent = name
    const cardInfo = cardAdd.querySelector('.card__image')
    cardInfo.src = link
    cardInfo.alt = name

    const heartCard = cardAdd.querySelector('.card__heart')
    heartCard.addEventListener('click', () => heartCard.classList.toggle('card__heart_active'))

    const trashCard = cardAdd.querySelector('.card__trash')
    trashCard.addEventListener('click', () => {
    const cardId = cardAdd.dataset.id
    console.log(cardId)
    fetch(`https://nomoreparties.co/v1/plus-cohort-22/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: '19feaa3d-4124-4771-a3db-87bef0dcd15a'
      }
    })
      .then(res => {
        if (res.ok) return res.json()
      })
      .then((data) => {
        console.log(data)
        cardAdd.remove()
      })
      .catch(err => console.log(`Ошибка - ${err}`))

    })

    const imageCard = cardInfo
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
