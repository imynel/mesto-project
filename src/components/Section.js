export default class Section {
    constructor({item, renderer}, containerSelector) {
        this.rendererItems = item
        this.renderer = renderer
        this.container = document.querySelector(containerSelector)
    }

    addItem(element) {
        this.container.append(element)
    }

    rendererElement() {
        // ПОКА НЕ ЗНАЮ, ЧТО СЮДА ВСТАВИТЬ
    }
}