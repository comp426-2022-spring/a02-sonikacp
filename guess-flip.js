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