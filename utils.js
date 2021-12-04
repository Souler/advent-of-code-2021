import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';

/**
 * CommonJS __dirname implementation for ES modules.
 *
 * @param {string} url 
 * @returns {string}
 */
export function importMetaUrlToDirname(url) {
  const __filename = fileURLToPath(url);
  const dirname = path.dirname(__filename);
  return dirname
}

/**
 * Reads the contents of the puzzle input text file at the provided url.
 * The most common usage will be providing import.meta.url as the first argument.
 *
 * @param {string} url Usually, you want to pass import.meta.url here
 * @returns {string}
 */
export function readInputFileContents(url, filename = './input.txt') {
  if (!url) {
    throw new Error('missing dirname, did you forgot to pass import.meta.url to readInputFileContents?')
  }

  const dirname = importMetaUrlToDirname(url)
  const inputFilepath = path.resolve(dirname, filename)
  const contents = fs.readFileSync(inputFilepath, 'ascii')
  return contents
}

/**
 * Reads the contents of the puzzle input text file at the provided url,
 * applies the provided `mapLine` to each line of the input and returns
 * the result.
 *
 * @template T
 * @param {string} url 
 * @param {(line: string, index: number) => T} mapLine
 * @returns {T[]}
 */
export function readInput(url, mapLine = line => line) {
  const contents = readInputFileContents(url)
  const lines = contents.split('\n')
  const mappedLines = lines.map(mapLine)
  return mappedLines
}
