import {
  nameProfile,
  jobProfile,
  sectionCards,
  placeInput,
  linkInput,
  templateSelector,
} from './consts.js'
import { createCard, renderCard } from './card.js'

const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-22',
  headers: {
    authorization: '19feaa3d-4124-4771-a3db-87bef0dcd15a',
    'Content-Type': 'application/json'
  }
}

export const gitInitialCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
    method: 'POST',
    body: JSON.stringify({
      name: placeInput.value,
      link: linkInput.value,
    })
  })
  .then(res => {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  })
}


fetch('https://nomoreparties.co/v1/plus-cohort-22/users/me', {
    headers: {
        authorization: '19feaa3d-4124-4771-a3db-87bef0dcd15a'
    }
})
    .then(res => res.json())
    .then(res => {
      console.log(res)
    })
    .catch(err => console.log(`Ошибка - ${err}`))

// fetch('https://nomoreparties.co/v1/plus-cohort-22/cards', {
//   method: 'POST',
//   headers: {
//     authorization: '19feaa3d-4124-4771-a3db-87bef0dcd15a',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     likes: []
//   })
// })
//   .then(res => res.json())
//   .then(res => console.log(res))

fetch('https://nomoreparties.co/v1/plus-cohort-22/cards', {
  headers: {
    authorization: '19feaa3d-4124-4771-a3db-87bef0dcd15a'
  },
// body: JSON.stringify({
//     name: placeInput,
//     link: linkInput,
//   })
})
  .then(res => res.json())
  .then(res => {
    console.log(res)
    res.forEach(element => {
      const card = createCard(element.name, element.link, templateSelector)
      card.dataset.id = element._id
      renderCard(card, sectionCards)
      const heartCount = card.querySelector('.card__count-heart')
      const trash = card.querySelector('.card__trash')
      if (element.owner._id !== '8d66a7f77463436798952378') {
        trash.classList.add('card__trash_inactive')
      }
      if (element.likes.length === 0){
        heartCount.textContent = 0
      } else {
        heartCount.textContent = element.likes.length
      }
    })

  })
  .catch(err => console.log(err.status, err))

fetch('https://nomoreparties.co/v1/plus-cohort-22/users/me', {
  method: 'PATCH',
  headers: {
    authorization: '19feaa3d-4124-4771-a3db-87bef0dcd15a',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Imynel',
    about: 'junior developer'
  })
})
  .then(res => res.json())
  .then(res => {
    nameProfile.textContent = res.name
    jobProfile.textContent = res.about
  })


