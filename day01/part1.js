import { readInput } from './utils'

const depths = readInput()
let depthJumps = 0

for (let i = 0; i < depths.length; i++) {
  const depth = depths[i]
  const prevDepth = depths[i - 1]

  if (prevDepth !== undefined && depth > prevDepth) {
    depthJumps += 1
  }
}

console.log('total depth jumps:', depthJumps)
