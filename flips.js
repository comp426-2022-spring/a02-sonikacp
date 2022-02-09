import { coinFlips, countFlips } from "./modules/coin.mjs";
const args = process.argv.slice(4);
// const args = process.argv;
console.log('--number=', args[3]);
if (process.argv.length < 4) {
    console.log(coinFlips(1));
    console.log(countFlips(coinFlips(1)));
    process.exit(1);
  }
  
console.log(coinFlips(args[3]));
console.log(countFlips(args[3]));
// console.log(countFlips())