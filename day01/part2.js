import { readInput } from './utils'

/**
 * Adds the values of a size 3 window starting on the provided index.
 *
 * @param {number[]} array 
 * @param {number} index 
 * @returns {number}
 */
function sumWindow(array, index = 0) {
  const depth0 = array[index + 0]
  const depth1 = array[index + 1]
  const depth2 = array[index + 2]
  if (
    depth0 == undefined ||
    depth1 === undefined ||
    depth2 === undefined
  ) {
    return undefined
  }

  return Number(depth0 + depth1 + depth2)
}

const depths = readInput()
let depthJumps = 0

for (let i = 0; i < depths.length; i++) {
  const depth = sumWindow(depths, i)
  const prevDepth = sumWindow(depths, i - 1)

  if (prevDepth !== undefined && depth > prevDepth) {
    depthJumps += 1
  }
}

console.log('total depth jumps:', depthJumps)
