import { Range } from "../util/range.ts"

const [rangeLines, ingredientLines] = (await Deno.readTextFile(`${import.meta.dirname}/input.txt`))
    .split(/\n\n/)
    .map((block) => block.split(/\n/).filter(Boolean))

const ranges = rangeLines.map(line => line.split("-")).map(([from, to]) => new Range(Number(from), Number(to)))

ranges.sort((a, b) => a.from - b.from)
const merged: Range[] = []
let cur = ranges[0]
for (const range of ranges) {
    if (range.overlaps(cur)) {
        cur = range.merge(cur)
    } else {
        merged.push(cur)
        cur = range;
    }
}
merged.push(cur);

const count = merged.reduce((a, b) => a + b.count(), 0)
console.log(count);