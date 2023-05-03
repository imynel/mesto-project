// import {openPopup} from './modal.js'
// import {
//     popupTitle,
//     popupImage,
//     imagePopup,
//     templateSelector,
//     id
// } from './consts.js'
// import { deleteRequestCardId, deleteRequestCardsLikesID, deleteRequestCard } from './api.js'

// function renderCard(card, container) {
//   container.prepend(card)
// }

// const myLikes = (likes, button) => {
//   likes.forEach(element => {
//     if (element._id === id.id) {
//       button.classList.add('card__heart_active')
//     }
//   })
// }

// const setLikes = (likes, number) => {
//   if (likes.length > 0) {
//     number.textContent = likes.length
//   }
//   else number.textContent = '0'
// }

// const deleteTrash = (owner, trash) => {
//   if (id.id !== owner) trash.remove()
// }

// function createCard(item) {
//     const cardTemplate = document.querySelector(templateSelector).content

//     const cardAdd = cardTemplate.querySelector('.card').cloneNode(true)
//     const countLikes = cardAdd.querySelector('.card__count-heart')

//     cardAdd.querySelector('.card__heading').textContent = item.name
//     const cardInfo = cardAdd.querySelector('.card__image')
//     cardInfo.src = item.link
//     cardInfo.alt = item.name

//     const heartCard = cardAdd.querySelector('.card__heart')
//     heartCard.addEventListener('click', (evt) => {
//       if (heartCard.classList.contains('card__heart_active')) {
//         deleteRequestCardId(item._id)
//           .then((item) => {
//             myLikes(item.likes, evt.target)
//             setLikes(item.likes, countLikes)
//             evt.target.classList.remove('card__heart_active')
//           })
//           .catch(err => console.log(`Ошибка - ${err}`))
//       } else {
//         deleteRequestCardsLikesID(item._id)
//           .then((item) => {
//           myLikes(item.likes, evt.target)
//           setLikes(item.likes, countLikes)
//           heartCard.classList.add('card__heart_active')
//         })
//           .catch(err => console.log(`Ошибка - ${err}`))
//       }
//     })

//     const trashCard = cardAdd.querySelector('.card__trash')
//     trashCard.addEventListener('click', () => {
//     deleteRequestCard(item._id)
//       .then(() => cardAdd.remove())
//       .catch(err => console.log(`Ошибка - ${err}`))
//     })

//     const imageCard = cardInfo
//       imageCard.addEventListener('click', () => {
//         popupTitle.textContent = cardAdd.querySelector('.card__heading').textContent
//         imagePopup.src = cardInfo.src
//         imagePopup.alt = popupTitle.textContent
//         openPopup(popupImage)
//       }
//     )
//     myLikes(item.likes, heartCard)
//     setLikes(item.likes, countLikes)
//     deleteTrash(item.owner._id, trashCard)

//     return cardAdd
// }


// export { createCard, renderCard }
