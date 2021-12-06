import { readInput as _readInput } from '../utils'

export function readInput() {
  return _readInput(import.meta.url, line => {
    const rgx = /^([0-9]+),([0-9]+) -> ([0-9]+),([0-9]+)/
    const [_, startX, startY, endX, endY] = rgx.exec(line)
    return [
      [Number(startX), Number(startY)],
      [Number(endX), Number(endY)],
    ]
  })
}

/**
 * Create a width * height 2-dimensional array filled with zeros.
 *
 * @param {number} width
 * @param {number} height 
 * @returns {number[][]}
 */
export function createPlain(width = 1000, height = 1000) {
  return Array.from({ length: width })
    .map(_ => Array.from({ length: height }).fill(0))
}

/**
 * JavaScript implementation of Bresenham's line algorithm.
 * Returns the list of points that link the two provided points.
 *
 * @param {[number, number]} point0
 * @param {[number, number]} point1 
 * @returns {[number, number][]}
 *
 * @see https://en.wikipedia.org/wiki/Bresenham%27s_line_algorithm
 * @see https://stackoverflow.com/a/4672319
 */
export function interpolateLine([x0, y0], [x1, y1]) {
  const points = []
  const dx = Math.abs(x1 - x0)
  const dy = Math.abs(y1 - y0)
  const sx = (x0 < x1) ? 1 : -1;
  const sy = (y0 < y1) ? 1 : -1;
  let err = dx - dy;

  while(true) {
    points.push([x0, y0]);

    if ((x0 === x1) && (y0 === y1)) {
      break
    }

    let e2 = 2 * err
    if (e2 > -dy) {
      err -= dy
      x0  += sx
    }
    if (e2 < dx) {
      err += dx
      y0  += sy
    }
  }

  return points
}

/**
 * 
 * @param {*} plain 
 * @returns 
 */
export function plainPoints(plain) {
  const points = []

  for (let y = 0; y < plain.length; y++) {
    for (let x = 0; x < plain[y].length; x++) {
      points.push({ x, y, value: plain[y][x] })
    }
  }

  return points
}
