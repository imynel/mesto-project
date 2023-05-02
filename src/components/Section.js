export default class Section {
    constructor({renderer}, containerSelector) {
        this._renderer = renderer
        this._container = document.querySelector(containerSelector)
    }

    addItem(element) {
        this._container.append(element)
    }

    rendererElement(items) {
          items.forEach(item => {
          const newItem = this._renderer(item)
          this.addItem(newItem)
        })
    }
}
