import { Range } from "../util/range.ts";

const [rangeLines, ingredientLines] = (await Deno.readTextFile(`${import.meta.dirname}/input.txt`))
    .split(/\n\n/)
    .map((block) => block.split(/\n/).filter(Boolean));

const ranges = rangeLines.map(line => line.split("-")).map(([from, to]) => new Range(Number(from), Number(to)));
const ingredients = ingredientLines.map(line => Number(line));

const count = ingredients.filter(it => ranges.some(range => range.contains(it))).length
console.log(count);