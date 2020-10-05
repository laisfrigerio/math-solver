class Circle {
    constructor( circleRadius ) {
        this.circleRadius = circleRadius;
        
    }

    /**
     * Calculate area of the circle
     */
    calc() {
        return Math.PI * this.circleRadius * this.circleRadius;
    }

}

export default Circle;