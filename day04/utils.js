import { readInput as _readInput } from '../utils'

/**
 * Parses the puzzle input. The returned tuple contains the bingo number draws
 * on its first position and the list of boards on its second.
 *
 * @example
 * ```
 * const [draws, boards] = readInput()
 * ```
 * @returns {[ number[], number[][] ]}
 */
export function readInput() {
  let draws = undefined
  let boards = []

  const lines = _readInput(import.meta.url, line => String(line))

  for (const line of lines) {
    if (draws === undefined) {
      // We are most likely processing the very first line
      draws = line.split(',').map(n => Number(n))
    } else if (line.length === 0) {
      // New boards are separated by empty lines
      boards.push([])
    } else {
      const cells = line.trim().split(/\s+/).map(n => Number(n))
      boards[boards.length - 1].push(cells)
    }
  }

  return [draws, boards]
}

/**
 * Returns an array containing every row on the provided board
 *
 * @param {number[][]} board
 * @returns {number[][]}
 */
export function rows(board) {
  const rows = []

  for (let rowIdx = 0; rowIdx < board.length; rowIdx++) {
    const row = board[rowIdx]
    rows.push(row)
  }

  return rows
}

/**
 * Returns an array containing every column on the provided board
 *
 * @param {number[][]} board
 * @returns {number[][]}
 */
export function columns(board) {
  const columns = []

  for (let columnIdx = 0; columnIdx < board.length; columnIdx++) {
    const column = new Array(board.length).fill(undefined).map((_, idx) => board[idx][columnIdx])
    columns.push(column)
  }

  return columns
}

/**
 * Returns an array containing every individual cell value on the provided board
 *
 * @param {number[][]} board
 * @returns {number[][]}
 */
export function cells(board) {
  const cells = []
  for (let rowIdx = 0; rowIdx < board.length; rowIdx++) {
    for (let columnIdx = 0; columnIdx < board[rowIdx].length; columnIdx++) {
      const cell = board[rowIdx][columnIdx]
      cells.push(cell)
    }
  }

  return cells
}

/**
 * Returns the cell score for a given board assuming the provided draws have already happened.
 *
 * @param {number[]} draws 
 * @param {number[][]} board 
 * @returns a score
 */
export function calcBoardScore(draws, board) {
  let score = 0

  for (const cell of cells(board)) {
    score += draws.includes(cell) ? 0 : cell 
  }

  const lastDraw = draws[draws.length - 1]

  return lastDraw * score
}

/**
 * Determines whether the given board has winned assuming the provided draws have already happened.
 *
 * @param {number[]} draws 
 * @param {number[][]} board 
 * @returns whether or not the board wins
 */
export function isWinnerBoard(draws, board) {
  const winningRow = rows(board).find(row => row.every(n => draws.includes(n)))
  const winningColumn = columns(board).find(row => row.every(n => draws.includes(n)))

  return Boolean(winningRow ||winningColumn)
}
