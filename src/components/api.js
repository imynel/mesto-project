

const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-22',
  headers: {
    authorization: '19feaa3d-4124-4771-a3db-87bef0dcd15a',
    'Content-Type': 'application/json'
  }
}

const getResponsData = (res) => {
  if (res.ok) return res.json()
  return Promise.reject(`Ошибка: ${res.status}`);
}

// ЗАПРОС ДЛЯ ИНФОРМАЦИИ О ЮЗЕРЕ
const getRequestUsersMe = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers
  })
  .then(res => getResponsData(res))
}

// ЗАПРОС ДЛЯ ИНФОРМАЦИИ О КАРТОЧКАХ
const getRequestCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
  .then(res => getResponsData(res))
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
  .then(res => getResponsData(res))
}

export const gitInitialCards = (place, link) => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
    method: 'POST',
    body: JSON.stringify({
      name: place,
      link: link,
    })
  })
  .then(res => getResponsData(res))
}
// ЗАПРОС НА УДАЛЕНИЕ ЛАЙКА
const deleteRequestCardId = (id) => {
  return fetch(`${config.baseUrl}/cards/likes/${id}`, {
    method: 'DELETE',
    headers: config.headers
  })
  .then(res => getResponsData(res))
}

// ЗАПРОС НА ДОБАВЛЕНИЯ ЛАЙКА
const deleteRequestCardsLikesID = (id) => {
  return fetch(`${config.baseUrl}/cards/likes/${id}`, {
    method: 'PUT',
    headers: config.headers
  })
  .then(res => getResponsData(res))
}

// ЗАПРОС НА УДАЛЕНИЕ КАРТОЧКИ
const deleteRequestCard = (id) => {
  return fetch(`${config.baseUrl}/cards/${id}`, {
    method: 'DELETE',
    headers: config.headers
  })
  .then(res => getResponsData(res))
}


function changeAvatar(link) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: link
    })
  })
    .then(res => getResponsData(res))
}




export {
  changeAvatar,
  patchRequestPrifile,
  deleteRequestCardId,
  deleteRequestCardsLikesID,
  deleteRequestCard,
  getRequestCards,
  getRequestUsersMe,
}


