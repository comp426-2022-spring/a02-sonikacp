import { flipACoin } from "./modules/coin.mjs";
const args = process.argv.slice(2);
let extracted;
for (let i = 0; i < args[0].length; i++) {
  extracted = args[0].slice(7, 12);
}
if (process.argv.length != 3) {
    console.error('Error: no input. \n Usage: node guess-flip --call=[heads|tails]');
    process.exit(1);
  }
console.log(flipACoin(extracted));