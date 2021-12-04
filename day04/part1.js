import { calcBoardScore, isWinnerBoard, readInput } from './utils'

const [drawMachine, boards] = readInput()
const [draws, board] = findWinnerBoard(drawMachine, boards)

console.log('draws:', ...draws)
console.log('winning board was:', board)

const boardScore = calcBoardScore(draws, board)

console.log('score:', boardScore)

// -- Helpers

function findWinnerBoard(drawMachine, boards) {
  const draws = []

  do {
    const draw = drawMachine.shift()
    draws.push(draw)
  
    for (const board of boards) {
      if (isWinnerBoard(draws, board)) {
        return [draws, board]
      }
    }
  } while (drawMachine.length > 0)

  return [draws, undefined]
}
