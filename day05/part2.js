import { createPlain, interpolateLine, plainPoints, readInput } from './utils'

const input = readInput()
const plain = createPlain(1000, 1000)

for (const [[x0, y0], [x1, y1]] of input) {
  const points = interpolateLine([x0, y0], [x1, y1])
  for (const [x, y] of points) {
    plain[y][x] += 1
  }
}

const intersections = plainPoints(plain).reduce(
  (intersections, { value }) => intersections + (value > 1 ? 1 : 0),
  0,
)

console.log('intersections:', intersections)
