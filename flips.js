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
} else {
  let coinFlipsNum = coinFlips(number_arg);
  console.log(coinFlipsNum);
  console.log(countFlips(coinFlipsNum)); 
}