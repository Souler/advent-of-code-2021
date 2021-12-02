# 🎄🗓️ Advent of code 2021
> `./aoc.js day01`

The objective of this year's solution is keeping it simple. That's it. No libraries, no async processing, no "bleeding edge" syntax. Just code that anyone could read regardless of their language of preference or experience.

## CLI
> Yes, I know, this is an overkill, but... It's quite convenient!

Run the solutions without hassle
```bash
$ ./aoc.js day03 # will create the directory for day 3 puzzle if it doesn't exist
$ ./aoc.js day01 # runs the solution for both parts of day 1 puzzle
$ ./aoc.js day 1 part 1 # runs the solution for the part 1 of the day 1 puzzle
$ ./aoc.js d2  # runs the solution for both parts of day 2 puzzle
$ ./aoc.js d2p1 # runs the solution for the part 1 of the day 2 puzzle
$ ./aoc.js all # runs all the available puzzle solutions
```

## FAQ
> These are mainly notes to my future self

### What is `day00`?
It's the template the CLI script uses to create "new" days.

### Why the CLI?
It all began because I'm quite lazy and I didn't want to have to remember the node cli flag por ESM support. After a couple of hours I realized I could make my life (and anyone's willing to use it) a tad better. I might consider creating a `npx` runnable tool, but not right now.
