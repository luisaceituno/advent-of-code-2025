const lines = (await Deno.readTextFile(`${import.meta.dirname}/input.txt`)).split(/\n/).filter(Boolean);
const banks = lines.map((line) => line.split("").map(Number));

function lookupLargestN(bank: number[], n: number): number[] {
  const lookupRange = n == 1 ? bank : bank.slice(0, -(n - 1));
  const largest = Math.max(...lookupRange);
  return n == 1 ? [largest] : [largest, ...lookupLargestN(bank.slice(bank.indexOf(largest) + 1), n - 1)];
}

let sum = 0;
for (const bank of banks) {
  const batteries = lookupLargestN(bank, 12);
  sum += Number(batteries.join(""));
}

console.log(sum);
