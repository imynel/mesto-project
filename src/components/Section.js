export default class Section {
    constructor({data, renderer}, containerSelector) {
        this._rendererItems = data
        this._renderer = renderer
        this._container = document.querySelector(containerSelector)
    }

    addItem(element) {
        this.container.append(element)
    }

    rendererElement() {
        this._rendererItems.forEach(item => {
          this._renderer(item)
        })
    }
}
