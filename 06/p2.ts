import { getLines } from "../util/input.ts";
import { transpose } from "../util/matrix.ts";

const lines = getLines(await Deno.readTextFile(`${import.meta.dirname}/input.txt`));
const operators = lines.at(-1)!.split(/\s+/);
const toTranspose = lines.slice(0, -1).map(line => [...line]);
const numbers = transpose(toTranspose).map(line => line.join("").trim());

let numIndex = 0;
let total = 0;
for (const operator of operators) {
    let result = operator == "*" ? 1 : 0;
    while (numIndex < numbers.length) {
        const number = numbers[numIndex++];
        if (!number) break;
        result = operator == "*" ? result * (Number(number)) : result + (Number(number));
    }
    total += result;
}

console.log(total);