import { flipACoin } from "./modules/coin.mjs";

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const args = require('minimist')(process.argv.slice(2));

const call_arg = args['call'];


if (call_arg == null) {
  console.log('Error: no input.\nUsage: node guess-flip --call=[heads|tails]');
} else if (call_arg != "heads" && call_arg != "tails") {
  console.log('Error: wrong input.\nUsage: node guess-flip --call=[heads|tails]');
} else {
  console.log(flipACoin(call_arg));
}

// // const args = process.argv.slice(2);
// // console.log('call:', args[0].slice(7,12));
// if (args.length==0) {
//   console.error('Error: no input.\nUsage: node guess-flip --call=[heads|tails]');
//   process.exit(1);
// }
// let extracted;
// for (let i = 0; i < args[0].length; i++) {
//   extracted = args[0].slice(7, 12);
// }
// // console.log('args.length:', args.length);

// console.log(flipACoin(extracted));