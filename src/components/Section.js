export default class Section {
    constructor({renderer}, containerSelector) {
        this._renderer = renderer
        this._container = containerSelector
    }

    addItem(element) {
        this._container.prepend(element)
    }

    rendererElement(items) {
          const reverseItem = items.reverse()
          reverseItem.forEach(item => {
          const newItem = this._renderer(item)
          this.addItem(newItem)
        })
    }
}
