import Square from '../resources/scripts/shapes/square';

test('square area 2 x 2', () => {
    const square = new Square(2, 2);
    expect(square.calc()).toBe(4);
});

test('square area 2 x 0', () => {
    const square = new Square(2, 0);
    expect(square.calc()).toBe(0);
});