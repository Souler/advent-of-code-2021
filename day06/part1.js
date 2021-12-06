import { countAlive, nextDay, readInput } from './utils'

let latestGen = readInput()
const days = Array.from({ length: 80 }).map((_, i) => i + 1)

for (const day of days) {
  latestGen = nextDay(latestGen)
  console.log('day', day, 'population is:', countAlive(latestGen))
}

console.log('lanternfish population count:', countAlive(latestGen))
