class Trapezium {
    constructor(baseA, baseB, heigth) {
        this.baseA = baseA;
        this.baseB = baseB;
        this.heigth = heigth;
    }

    calculateArea() {
        return ((this.baseA + this.baseB) * this.heigth) / 2;           
    }
}

export default Trapezium;