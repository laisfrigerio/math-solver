class Triangle {
    constructor(base, heigth) {
        this.base = base;
        this.heigth = heigth;
    }

    calculateArea() {
        return (this.base * this.heigth) / 2;
    }
}

export default Triangle;