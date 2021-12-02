import { readInput as _readInput } from '../utils'

export function readInput() {
  return _readInput(import.meta.url, line => Number(line))
}
