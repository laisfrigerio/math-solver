import TriangleRight from '../resources/scripts/shapes/triangleRight'

test('triangleRight area 3 x 4', () => {
    const triangleRight = new TriangleRight(3, 4);
    expect(triangleRight.calculateArea()).toBe(6);
});

test('triangleRight area 3 x 6', () => {
    const triangleRight = new TriangleRight(3, 5);
    expect(triangleRight.calculateArea()).toBe(9);
});

test('triangleRight area 0 x 2', () => {
  const triangleRight = new TriangleRight(0, 2);
  expect(triangleRight.calculateArea()).toBe(0);
});