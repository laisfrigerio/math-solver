export default class Square {
    constructor(base, height) {
        this.base = base;
        this.height = height;
    }

    calc() {
        return this.base * this.height;
    }
}