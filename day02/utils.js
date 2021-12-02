import { readInput as _readInput } from '../utils'

export function readInput() {
  return _readInput(import.meta.url, line => {
    const [direction, amountStr] = line.split(' ')
    const amount = Number(amountStr)
    return {
      forward: direction === 'forward' ? amount : 0,
      up: direction === 'up' ? amount : 0,
      down: direction === 'down' ? amount : 0,
    }
  })
}
