import { flipACoin } from "./modules/coin.mjs";
const args = process.argv.slice(4);
// const args = process.argv;
console.log('--call=', args[3]);
if (process.argv.length < 4) {
    console.error('Error: no input. \n Usage: node guess-flip --call=[heads|tails]');
    process.exit(1);
  }
  
console.log(flipACoin(args[3]));