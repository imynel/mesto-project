export default class Section {
    constructor({renderer}, containerSelector) {
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