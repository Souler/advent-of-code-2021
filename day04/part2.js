import { calcBoardScore, isWinnerBoard, readInput } from './utils'

const [drawMachine, boards] = readInput()
const [draws, board] = findWorstBoard(drawMachine, boards)

console.log('draws:', ...draws)
console.log('worst board was:', board)

const boardScore = calcBoardScore(draws, board)

console.log('score:', boardScore)

// -- Helpers

function findWorstBoard(drawMachine, boards) {
  const draws = []
  const availableBoards = new Set(boards)

  do {
    const draw = drawMachine.shift()
    draws.push(draw)

    for (const board of availableBoards) {
      if (isWinnerBoard(draws, board)) {
        if (availableBoards.size > 1) {
          availableBoards.delete(board)
        } else {
          return [draws, board]
        }
      }
    }
  } while (drawMachine.length > 0)

  return [draws, undefined]
}
