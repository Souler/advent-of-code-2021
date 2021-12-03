import { countBits, readInput } from './utils'

const input = readInput()
const bitCount = countBits(input)

for (const bits of input) {
  for (let i = 0; i < bits.length; i++) {
    const bit = bits[i]
    bitCount[i][bit] += 1
  }
}

const gammaBinaryString = bitCount.map(count => count[1] > count[0] ? 1 : 0).join('')
const epsilonBinaryString = bitCount.map(count => count[1] > count[0] ? 0 : 1).join('')

const gamma = parseInt(gammaBinaryString, 2)
const epsilon = parseInt(epsilonBinaryString, 2)

console.log('gamma', gamma)
console.log('epsilon', epsilon)
console.log('power consumption:', gamma * epsilon)
