import Api from "./classApi.js"
// Создание класса UserInfo
export default class UserInfo extends Api{
  constructor(name, about, options){
    super(options)
    this._name = name
    this._about = about
  }

  getUserInfo() {
    this.getResponsInfo()
    // getRequestUsersMe()
    //   .then(data => {
    //     console.log(data)
    //     return data
    //   })
  }

  setUserInfo(nameValue, aboutValue) {
    this.patchRequestPrifile(nameValue, aboutValue)
    this._name.textContent = nameValue
    this._about.textContent = aboutValue
  }
}


