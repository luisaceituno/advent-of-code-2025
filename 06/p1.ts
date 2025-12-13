import { getGrid } from "../util/input.ts";

const values = getGrid(await Deno.readTextFile(`${import.meta.dirname}/input.txt`));
const width = values[0].length

let total = 0;
for (let x = 0; x < width; x++) {
    const sign = values.at(-1)?.[x];
    if (!sign) throw new Error("no sign found");
    let result = sign == "+" ? 0 : 1;
    for (let y = 0; y < values.length - 1; y++) {
        result = sign == "+" ?
            result + Number(values[y][x]) :
            result * Number(values[y][x]);
    }
    total += result;
}

console.log(total);