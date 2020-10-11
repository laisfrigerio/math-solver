import Triangle from '../resources/scripts/shapes/triangle'

test('triangle area 3 x 4 x 5', () => {
    const tringle = new Triangle(3, 4, 5);
    expect(tringle.calculateArea()).toBe(6);
});

test('triangle area 3 x 5 x 7', () => {
    const tringle = new Triangle(3, 5, 7);
    expect(tringle.calculateArea()).toBe(6.495190528383289);
});

test('triangle area 4 x 7 x 8', () => {
  const tringle = new Triangle(4, 7, 8);
  expect(tringle.calculateArea()).toBe(13.997767679169417);
});

test('triangle area 4 x 7 x 8', () => {
  const tringle = new Triangle(4, 7, 30);
  expect(tringle.calculateArea()).toBe(NaN);
});

test('triangle area 0 x 2 x 4', () => {
  const tringle = new Triangle(0, 2, 4);
  expect(tringle.calculateArea()).toBe(0);
});