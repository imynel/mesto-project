import Popup from "./popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector, popupOpen) {
        super(popupSelector, popupOpen)
        this.image = this.popup.querySelector('.popup-image__image')
        this.imageText = this.popup.querySelector('.popup-image__title')
    }
    open({imageSrc, text}) {
      this.image.src = imageSrc;
      this.imageText.textContent = text;
      this.image.alt = text;
      super.open()
    }
}
