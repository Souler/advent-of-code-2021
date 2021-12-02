import { readInput } from './utils'

const movements = readInput()
let horizontalPosition = 0
let depth = 0
let aim = 0

for (const movement of movements) {
  aim += movement.down
  aim -= movement.up
  horizontalPosition += movement.forward
  depth += aim * movement.forward
}

console.log('horizontal position:', horizontalPosition)
console.log('depth:', depth)
console.log('aim:', aim)
console.log('solution:', horizontalPosition * depth)
