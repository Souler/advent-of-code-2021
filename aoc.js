#!/usr/bin/env node --experimental-specifier-resolution=node
import fs from 'fs'
import path from 'path'
import process from 'process'
import childProcess from 'child_process'
import { importMetaUrlToDirname as __dirname } from './utils'

function checkNodeVersion() {
  const [majorVersion] = process.version.split('.')
  const version = Number(majorVersion.replace(/^v/, ''))
  if (version < 16) {
    console.error('Node.js version 16 or greater is required to run this script!')
    process.exit(1)
  }
}

function getPuzzleSolutionFilename(day, part) {
  const baseDir = __dirname(import.meta.url)
  const dayDir = `day${String(day).padStart(2, '0')}`
  const partBasename = `part${part}.js`
  const filename = path.join(baseDir, dayDir, partBasename)

  return filename
}

function doesPuzzleSolutionFileExist(day, part) {
  const filename = getPuzzleSolutionFilename(day, part)
  return fs.existsSync(filename)
}

function copyDayPuzzleTemplateToNewDay(day) {
  const source = path.dirname(getPuzzleSolutionFilename(0, 1))
  const dest = path.dirname(getPuzzleSolutionFilename(day, 1))

  fs.cpSync(source, dest, { recursive: true, errorOnExist: true, force: false })
}

function execPuzzleSolution(day, part) {
  const filepath = getPuzzleSolutionFilename(day, part)
  childProcess.execSync(`node --experimental-specifier-resolution=node '${filepath}'`, {
    stdio: 'inherit',
  })
}

function createDaySolutionFiles(day) {
  checkNodeVersion()
  console.log(`>> creating puzzle solution for day ${day} from template`)
  copyDayPuzzleTemplateToNewDay(day)
}

function runDaySolution(day, part) {
  if (part) {
    console.log(`>> running day ${day}, part ${part}...`)
    execPuzzleSolution(day, part)
  } else {
    console.log(`>> running day ${day}, part 1...`)
    execPuzzleSolution(day, 1)
    console.log()
    console.log(`>> running day ${day}, part 2...`)
    execPuzzleSolution(day, 2)
  }
}

function runAllDaysSolutions() {
  const adventDays = new Array(25).fill(undefined).map((_, idx) => idx+1)

  console.log(`>> running all available days puzzle solutions...`)
  console.log()

  for (const day of adventDays) {
    if (doesPuzzleSolutionFileExist(day, 1)) {
      runDaySolution(1)
    }
  }
}

function main(input) {
  let match
  if (match = /^d(?:ay)? ?([0-9]{1,2})$/.exec(input)) {
    const day = match[1]
    if (doesPuzzleSolutionFileExist(day, 1)) {
      runDaySolution(day)
    } else {
      createDaySolutionFiles(day)
      runDaySolution(day)
    }
  } else if (match = /^d(?:ay)? ?([0-9]{1,2}) ?p(?:art)? ?([1,2])$/.exec(input)) {
    runDaySolution(match[1], match[2])
  } else if (input === 'all') {
    runAllDaysSolutions()
  } else {
    console.error('Couldnt parse your input.')
    console.error('Try using one of the following examples:')
    console.error('$ ./aoc.js day 1 part 1')
    console.error('$ ./aoc.js day1')
    console.error('$ ./aoc.js d2')
    console.error('$ ./aoc.js d2p2')
    console.error('$ ./aoc.js all')
    process.exit(1)
  }
}

const [_0, _1, ...args] = process.argv
main(args.join(' '))
