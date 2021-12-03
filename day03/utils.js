import { readInput as _readInput } from '../utils'

export function readInput() {
  return _readInput(import.meta.url, line => String(line))
}

/**
 * Parses the given list of binary strings according to the puzzle.
 * 
 * The return value will be an array of objects with the same length as any of
 * the strings on the provided list.
 * 
 * Each object in the array will have a '0' and '1' properties which represent
 * the mount of times that bit value appeared on the list at that position.
 *
 * @param {string[]} list 
 * @returns
 */
export function countBits(list) {
  const bitCount = Array
    .from({ length: list[0].length })
    .map(() => ({ 0: 0, 1: 0 }))

  const bitsList = list.map(binaryString => binaryString.split(''))
  for (const bits of list) {
    for (let i = 0; i < bits.length; i++) {
      const bit = bits[i]
      bitCount[i][bit] += 1
    }
  }

  return bitCount
}
