import { getRequestUsersMe } from './api.js'

// Создание класса UserInfo
export default class UserInfo {
  constructor(name, about, avatar){
    this._name = name
    this._about = about
    this._avatar = avatar
  }

  getUserInfo() {
    getRequestUsersMe()
      .then(data => {
        console.log(data)
        return data
      })
  }

  setUserInfo(user) {
    this._name.textContent = user.name
    this._about.textContent = user.about
    this._avatar.src = user.avatar
  }
}


