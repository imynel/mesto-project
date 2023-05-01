import { getRequestUsersMe } from './api.js'

// Создание класса UserInfo
export default class UserInfo {
  constructor(name, about, avatar){
    this._name = name
    this._about = about
    this._avatar = avatar
  }

  getUserInfo(data) {
    return {
      name: data.name,
      about: data.about,
      avatar: data.avatar,
    }
  }

   setUserInfo = (data) => {
    if (data.name) this._name.textContent = data.name
    if (data.about) this._about.textContent = data.about
    if (data.avatar) this._avatar.src = data.avatar
    if (data._id) this._userId = data._id
  }
}


