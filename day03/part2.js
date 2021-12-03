import { countBits, readInput } from './utils'

const input = readInput()

const oxygen = calcValue(input, (position, bitCount) => bitCount[position][1] >= bitCount[position][0] ? 1 : 0)
const co2 = calcValue(input, (position, bitCount) => bitCount[position][1] >= bitCount[position][0] ? 0 : 1)

console.log(oxygen)
console.log(co2)
console.log(co2 * oxygen)

// -- Helpers

/**
 * Calculates the measurement value according to the puzzle description.
 * It is important `determineExpectedBitValue` correctly encapsulates the requirements!
 *
 * @param {string[]} binaryStrings 
 * @param {(position: number, bitCount: Array<{ 0: number, 1: number }>) => string|number} determineExpectedBitValue 
 * @returns 
 */
function calcValue(binaryStrings, determineExpectedBitValue) {
  let list = binaryStrings

  for (let position = 0; position < input.length; position++) {
    const bitCount = countBits(list)
    const expectedBitValue = determineExpectedBitValue(position, bitCount)
    list = list.filter(bits => bits[position] == expectedBitValue)
  
    if (list.length === 1) {
      break
    }
  }
  
  return parseInt(list[0], 2)
}
