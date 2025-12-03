const lines = (await Deno.readTextFile("02/input.txt")).split("\n");
const ranges = lines[0].split(",").map((r) => r.split("-").map(Number));

let sum = 0;
for (const [l, r] of ranges) {
  let cur = l;
  do {
    const str = cur.toString();
    for (let i = 1; i <= str.length / 2; i++) {
      if (str.length % i !== 0) continue;
      const pattern = str.substring(0, i);
      const repeated = pattern.repeat(str.length / pattern.length);
      if (repeated === str) {
        sum += cur;
        break;
      }
    }
  } while (++cur <= r);
}
console.log(sum);
