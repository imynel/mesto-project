export default class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl
    this.headers = options.headers
    // this.method = this.method
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
      headers: this.headers
    })
            .then(this._getResponsData)
            .then(data => console.log(data))
  }

  _getResponsData = res => {
    if(res.ok) return res.json()
    return Promise.reject(err => console.log(`Ошибка - ${err.status}`))
  }

  getResponsInfo() {
    return fetch(`${this.baseUrl}/users/me`)
  }
}




