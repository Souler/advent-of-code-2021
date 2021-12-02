import { readInput } from './utils'

const movements = readInput()
let horizontalPosition = 0
let depth = 0

for (const movement of movements) {
  horizontalPosition += movement.forward
  depth += movement.down
  depth -= movement.up
}

console.log('horizontal position:', horizontalPosition)
console.log('depth:', depth)
console.log('solution:', horizontalPosition * depth)
