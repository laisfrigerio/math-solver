class Rectangle {
    constructor(heigth, width) {
        this.heigth = heigth;
        this.width = width;
    }

    calculateArea() {
        return this.heigth * this.width;
    }
}

export default Rectangle;