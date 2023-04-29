import Api from "./classApi.js"
// Создание класса UserInfo
export default class UserInfo{
  constructor(name, about, avatar){
    this.name = name
    this.about = about
    this.avatar = avatar
  }

  getUserInfo() {
    this.getResponsInfo()
    // getRequestUsersMe()
    //   .then(data => {
    //     console.log(data)
    //     return data
    //   })
  }

  setUserInfo(data) {
    if (data.name) this.name.textContent = data.name
    if (data.about) this.about.textContent = data.about
    if (data.avatar) this.avatar.src = data.avatar
    if (data._id) this.userId = data._id
  }
}


