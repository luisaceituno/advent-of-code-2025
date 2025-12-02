const lines = (await Deno.readTextFile("01/input.txt")).split("\n");

let cur = 50;
let count = 0;
for (const line of lines) {
  const clicks = Number(line.substring(1));
  count += Math.floor(clicks / 100);
  const remainder = clicks % 100;
  if (remainder != 0) {
    const next = cur + (line[0] === 'R' ? remainder : -remainder);
    if (next < 0 && cur > 0 || next == 0 || next >= 100) {
      count++;
    }
    cur = (next + 100) % 100;
  }
}

console.log(count);