const lines = (await Deno.readTextFile("01/input.txt")).split("\n");

let cur = 50;
let count = 0;
for (const line of lines) {
  if (line[0] === 'R') {
    cur += Number(line.substring(1));
  } else {
    cur -= Number(line.substring(1));
  }
  cur = cur % 100;
  if (cur == 0) {
    count++;
  }
}

console.log(count);