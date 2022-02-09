import { flipACoin } from "./modules/coin.mjs";
const args = process.argv.slice(2);
let extracted;
for (let i = 0; i < args[0].length; i++) {
  extracted = args[0].slice(8, 12);
}
console.log('--call=', args[3]);
if (process.argv.length < 2) {
    console.error('Error: no input. \n Usage: node guess-flip --call=[heads|tails]');
    process.exit(1);
  }

console.log(flipACoin(args[3]));



// import { coinFlips, countFlips } from "./modules/coin.mjs";

// const args = process.argv.slice(2);
// let extracted;
// for (let i = 0; i < args[0].length; i++) {
//   extracted = args[0].slice(9, 11);
// }
// // fix this
// if (process.argv.length < 2) {
//     console.log(coinFlips(1));
//     console.log(countFlips(coinFlips(1)));
//     process.exit(1);
//   }
  
// console.log(coinFlips(extracted));
// console.log(countFlips(coinFlips(extracted)));