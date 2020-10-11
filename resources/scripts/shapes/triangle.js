class Triangle {
    constructor(sideA, sideB, sideC) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }

    // Check if could be a triangle
    checkTriangle() {
        if (sideA < Math.abs(sideB - sideC) || sideA > sideB + sideC) {
            return false;
        }
        else if (sideB < Math.abs(sideA - sideC) || sideB > sideA + sideC) {
            return false;
        }
        else if (sideC < Math.abs(sideA - sideB) || sideC > sideA + sideB) {
            return false;
        }
        else {
            true;
        }
    }

    calculateArea() {
        if (this.checkTriangle) {

            var angle = Math.acos((Math.pow(this.sideA,2) + Math.pow(this.sideB,2) + 
                        - Math.pow(this.sideC, 2)) / (2 * this.sideA * this.sideB));

            var heigtha = this.sideB * Math.sin(angle);

            var area = (heigtha * this.sideA) / 2;

            return area;
        }             
    }
}

export default Triangle;