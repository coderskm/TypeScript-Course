interface Circle {
  kind: `circle`;
  radius: number;
}

interface Square {
  kind: `square`;
  side: number;
}
interface Rectangle {
  kind: `rectangle`;
  length: number;
  width: number;
}

type Shape = Circle | Square|Rectangle;

function getShapeArea2(shape: Shape) {
  switch (shape.kind) {
    case `circle`:
      return Math.PI * shape.radius ** 2;
    case `square`:
      return shape.side ** 2;
    case `rectangle`:
      return shape.length * shape.width;
    default:
      const _defaultForShape: never = shape;
      return _defaultForShape;
  }
}
