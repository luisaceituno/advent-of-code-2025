const lines = (await Deno.readTextFile("02/input.txt")).split("\n");
const ranges = lines[0].split(",").map((r) => r.split("-").map(Number));

let sum = 0;
for (const [l, r] of ranges) {
  let cur = l;
  do {
    const str = cur.toString();
    const half = str.length / 2;
    const firstHalf = str.substring(0, half);
    const secondHalf = str.substring(half);
    if (firstHalf === secondHalf) {
      sum += cur;
    }
    cur++;
  } while (cur <= r);
}
console.log(sum);
