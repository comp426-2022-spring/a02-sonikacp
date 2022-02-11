import { flipACoin } from "./modules/coin.mjs";
const args = process.argv.slice(2);
if (args.length==0 || args[0] != 'heads' || args[0] != 'tails') {
  console.error('Error: no input.\nUsage: node guess-flip --call=[heads|tails]');
  process.exit(1);
}
let extracted;
for (let i = 0; i < args[0].length; i++) {
  extracted = args[0].slice(7, 12);
}
// console.log('args.length:', args.length);

console.log(flipACoin(extracted));