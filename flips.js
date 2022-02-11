import { coinFlips, countFlips } from "./modules/coin.mjs";

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const args = require('minimist')(process.argv.slice(2));

const number_arg = args['number'];

if (number_arg == null) {
  let argOneFlip = coinFlips(1);
  console.log(argOneFlip);
  if (argOneFlip == ['heads']) {
    console.log('{ heads: 1 }');
  } else {
    console.log('{ tails: 1 }');
  }
  // console.log(countFlips(argOneFlip));
} else {
  let coinFlipsNum = coinFlips(number_arg);
  console.log(coinFlipsNum);
  console.log(countFlips(coinFlipsNum)); 
}

// if (args.length == 0) {
//   let argOneFlip = coinFlips(1);
//   console.log(argOneFlip);
//   console.log(countFlips(argOneFlip));
//   process.exit(1);
// }
// let extracted;
// for (let i = 0; i < args[0].length; i++) {
//   extracted = args[0].slice(9, 11);
// }
// let coinFlipsNum = coinFlips(extracted);
// console.log(coinFlipsNum);
// console.log(countFlips(coinFlipsNum)); 