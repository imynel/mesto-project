import {openPopup} from './modal.js'
import {
    popupTitle,
    popupImage,
    imagePopup,
    sectionCards,
    templateSelector
} from './consts.js'


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
    heartCard.addEventListener('click', () => {
      const cardId = cardAdd.dataset.id
      if (heartCard.classList.contains('card__heart_active')) {
        fetch(`https://nomoreparties.co/v1/plus-cohort-22/cards/likes/${cardId}`, {
          method: 'DELETE',
          headers: {
            authorization: '19feaa3d-4124-4771-a3db-87bef0dcd15a'
          }
        })
          .then(res => {
            if (res.ok) return res.json()
          })
          .then((data) => {
            heartCard.classList.remove('card__heart_active')
          })
          .catch(err => console.log(`Ошибка - ${err}`))
      } else {
        fetch(`https://nomoreparties.co/v1/plus-cohort-22/cards/likes/${cardId}`, {
          method: 'PUT',
          headers: {
            authorization: '19feaa3d-4124-4771-a3db-87bef0dcd15a',
            'Content-Type': 'application/json'
          },
        })
          .then(res => {
            if (res.ok) return res.json()
            return Promise.reject(`Ошибка: ${res.status}`)
          })
          .then(date => {
            heartCard.classList.add('card__heart_active')
          })
          .catch(err => console.log(err))
      }



    })

    const trashCard = cardAdd.querySelector('.card__trash')
    trashCard.addEventListener('click', () => {
    const cardId = cardAdd.dataset.id
    fetch(`https://nomoreparties.co/v1/plus-cohort-22/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: '19feaa3d-4124-4771-a3db-87bef0dcd15a'
      }
    })
      .then(res => {
        if (res.ok) return res.json()
        return Promise.reject(`Ошибка: ${res.status}`)
      })
      .then((data) => {
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
