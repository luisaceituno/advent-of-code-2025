const lines = (await Deno.readTextFile(`${import.meta.dirname}/input.txt`)).split(/\n/).filter(Boolean);
const map = lines.map((l) => l.split(""));

function countRollsInBlock(y: number, x: number): number {
  let count = 0;
  map.slice(Math.max(y - 1, 0), y + 2).forEach((line) =>
    line.slice(Math.max(x - 1, 0), x + 2).forEach((pos) => {
      if (pos === "@") count++;
    })
  );
  return count;
}

let sum = 0;
let recheck = true;
while (recheck) {
  recheck = false;
  map.forEach((line, y) => {
    line.forEach((pos, x) => {
      if (pos === "@" && countRollsInBlock(y, x) < 5) {
        sum++;
        map[y][x] = ".";
        recheck = true;
      }
    });
  });
}

console.log(sum);
