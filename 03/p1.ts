const lines = (await Deno.readTextFile(`${import.meta.dirname}/input.txt`)).split(/\n/).filter(Boolean);

let sum = 0;
for (const bank of lines) {
  const lookupFirst = bank.substring(0, bank.length - 1);
  const first = lookupFirst.split("").sort().at(-1)!;
  const lookupSecond = bank.substring(bank.indexOf(first) + 1, bank.length);
  const second = lookupSecond.split("").sort().at(-1)!;
  sum += Number(`${first}${second}`);
}

console.log(sum);
