import Popup from "./popup";

class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._photo = popup.querySelector('.popup-image__image');
    this._title = popup.querySelector('.popup-image__title');
  }

  open(name, link) {
    this._photo.src = link;
    this._photo.alt = name;
    this._title.textContent = name;
    super.open()
  }
}
