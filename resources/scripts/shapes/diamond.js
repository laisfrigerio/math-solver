class Diamond{
    constructor( shortDiagonal, longDiagonal) {
        this.shortDiagonal = shortDiagonal;
        this.longDiagonal = longDiagonal;
    }

    calc() {
        let area = ( this.shortDiagonal * this.longDiagonal ) / 2;

        return area;
    }
}

export default Diamond;