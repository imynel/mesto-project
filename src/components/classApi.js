export default class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl
    this.headers = options.headers
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
      headers: this.headers
    })
            .then(this._getResponsData)
            .then(data => console.log(data))
  }

  getResponsInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: this.headers
    })
            .then(this._getResponsData)
            .then(data => console.log(data))
  }

  patchRequestPrifile(nameProfile, aboutProfile) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: nameProfile,
        about: aboutProfile
    })
    })
            .then(this._getResponsData)
  }




  _getResponsData = res => {
    if(res.ok) return res.json()
    return Promise.reject(err => console.log(`Ошибка - ${err.status}`))
  }
}




