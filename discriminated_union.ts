interface Circle{
    kind: `circle`,
    radius:number
}

interface Square{
    kind: `square`,
    side:number
}
interface Rectangle {
  kind: `rectangle`,
  length: number,
  width: number
}

type Shape = Circle | Square ;

function getShapeArea1(shape: Shape) {
    if (shape.kind === 'circle') return Math.PI * shape.radius ** 2
    return shape.side ** 2;
}

