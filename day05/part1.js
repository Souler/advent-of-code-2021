import { createPlain, interpolateLine, plainPoints, readInput } from './utils'

const input = readInput()
const plain = createPlain()

for (const [[x0, y0], [x1, y1]] of input) {
  if (!(x0 === x1 || y0 === y1)) {
    // Ignore diagonal lines
    continue
  }

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
