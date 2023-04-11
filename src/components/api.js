import {
  nameProfile,
  jobProfile,
  sectionCards,
  placeInput,
  linkInput,
  templateSelector,
  buttonAvatar,
} from './consts.js'
import { createCard, renderCard } from './card.js'

const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-22',
  headers: {
    authorization: '19feaa3d-4124-4771-a3db-87bef0dcd15a',
    'Content-Type': 'application/json'
  }
}

// ЗАПРОС ДЛЯ ИНФОРМАЦИИ О ЮЗЕРЕ
const getRequestUsersMe = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers
  })
  .then(res => {
    if (res.ok) return res.json()
    return Promise.reject(`Ошибка - ${res.status}`)
  })
}

// ЗАПРОС ДЛЯ ИНФОРМАЦИИ О КАРТОЧКАХ
const getRequestCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
  .then(res => {
    if (res.ok) return res.json()
    return Promise.reject(`Ошибка - ${res.status}`)
  })
} 

// ЗАПРОС ДЛЯ ОБНОВЛЕНИЯ ИНФОРМАЦИИ ПРОФИЛЯ
const patchRequestPrifile = (nameProfile, aboutProfile) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: nameProfile,
      about: aboutProfile
    })
  })
  .then(res => {
    if (res.ok) return res.json()
    return Promise.reject(`Ошибка - ${res.status}`)
  })
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


getRequestCards()
  .then(res => {
    res.forEach(element => {
      const card = createCard(element.name, element.link, templateSelector)
      card.dataset.id = element._id
      card.id = element._id
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
    getRequestUsersMe()
    .then((data) => {
      console.log(data)
      buttonAvatar.style.backgroundImage = `url('${data.avatar}')`
      nameProfile.textContent = data.name
      jobProfile.textContent = data.about
    })
  })
  .catch(err => console.log(err.status, err))


function changeAvatar(link) {
  return fetch('https://nomoreparties.co/v1/plus-cohort-22/users/me/avatar', {
    method: 'PATCH',
    headers: {
      authorization: '19feaa3d-4124-4771-a3db-87bef0dcd15a',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      avatar: link
    })
  })
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Ошибка: ${res.status}`)
    })
}

const checkLikes = () => {
  return fetch('https://nomoreparties.co/v1/plus-cohort-22/users/me', {
    headers: {
      authorization: '19feaa3d-4124-4771-a3db-87bef0dcd15a',
    },
  })
  .then(res => {
    if (res.ok) return res.json()
    return Promise.reject(`Ошибка: ${res.status}`)
  })
  .then(data => {
    return data
  })
}

const giveCards = () => {
  return fetch('https://nomoreparties.co/v1/plus-cohort-22/cards', {
    headers: {
      authorization: '19feaa3d-4124-4771-a3db-87bef0dcd15a',
    },
  })
  .then(res => {
    if (res.ok) return res.json()
    return Promise.reject(`Ошибка: ${res.status}`)
  })
  .then(data => {
    return data
  })
}

Promise.all([checkLikes(), giveCards()])
  .then(([checkLikes, giveCards]) => {
    console.log(checkLikes, giveCards)
    giveCards.forEach(elm => {
      elm.likes.forEach(element => {
        if (element._id === '8d66a7f77463436798952378') {
          const cardId = document.getElementById(`${elm._id}`)
          const cardLike = cardId.querySelector('.card__heart')
          cardLike.classList.add('card__heart_active')
        }
      }) 
      
    })
  })
  .catch(err => console.log(err))

export { changeAvatar, patchRequestPrifile }


