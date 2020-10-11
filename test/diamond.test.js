import Diamond from '../resources/scripts/shapes/diamond';

test('diamong area 7 x 10', () => {
    const diamond = new Diamond(7, 10);
    expect(diamond.calc()).toBe(35);
});

test('diamond area 5 x 8', () => {
    const diamond = new Diamond(5, 8);
    expect(diamond.calc()).toBe(20);
});

test('diamond area 3 x 7', () => {
    const diamond = new Diamond(3, 7);
    expect(diamond.calc()).toBe(10.5);
});

test('diamond area 0 x 0', () => {
    const diamond = new Diamond(0, 0);
    expect(diamond.calc()).toBe(0);
});