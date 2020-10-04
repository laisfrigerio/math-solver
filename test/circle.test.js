import Circle from '../resources/scripts/shapes/circle';

test('circle area 4', () => {
    const circle = new Circle(4);
    expect(circle.calc()).toBe(50.26548245743669);
});

test('circle area 12', () => {
    const circle = new Circle(12);
    expect(circle.calc()).toBe(452.3893421169302);
});