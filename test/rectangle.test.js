import Rectangle from '../resources/scripts/shapes/square';

test('rectangle area 3 x 2', () => {
    const rectangle = new Rectangle(3, 2);
    expect(rectangle.calculateArea()).toBe(6);
});

test('rectangle area 3 x 10', () => {
    const rectangle = new Rectangle(3, 10);
    expect(rectangle.calculateArea()).toBe(30);
});

test('rectangle area 0 x 10', () => {
  const rectangle = new Rectangle(0, 10);
  expect(rectangle.calculateArea()).toBe(0);
});