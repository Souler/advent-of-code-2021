import { readInputFileContents } from '../utils'

/**
 * Reads the puzzle input and returns and object with keys ranging from 0 to 8, where
 * their values represent the amount of times that value was present on the input.
 *
 * @returns {Record<number, number>}
 */
export function readInput() {
  const populationReport = {
    0: 0, 
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
  }
  const line =  readInputFileContents(import.meta.url)
  line.split(',').forEach(n => { populationReport[Number(n)] += 1 })


  return populationReport
}

/**
 * Calculates the next day population report given the current one.
 *
 * @param {Record<number, number>} populationReport 
 * @returns {Record<number, number>}
 */
export function nextDay(populationReport) {
 return {
    0: populationReport[1],
    1: populationReport[2],
    2: populationReport[3],
    3: populationReport[4],
    4: populationReport[5],
    5: populationReport[6],
    6: populationReport[7] + populationReport[0],
    7: populationReport[8],
    8: populationReport[0],
  }
}

/**
 * Calculates the total population count for a given population record
 * @param {Record<number, number>} populationReport 
 * @returns 
 */
export function countAlive(populationReport) {
  return Object.values(populationReport).reduce((v, c) => v + c, 0)
}
