import { coinFlips, countFlips } from "./modules/coin.mjs";

const args = process.argv.slice(2);
if (args.length == 0) {
  console.log(coinFlips(1));
  console.log(countFlips(coinFlips(1)));
  process.exit(1);
}
let extracted;
for (let i = 0; i < args[0].length; i++) {
  extracted = args[0].slice(9, 11);
}
const coinFlipsNum = coinFlips(extracted);
console.log(coinFlipsNum);
console.log(countFlips(coinFlipsNum)); // why is this printing the wrong number???