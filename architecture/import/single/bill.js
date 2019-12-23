import { capitalize, roundToDecimalPlace } from './util';

function giveTotal(name, total) {
  return `${capitalize(name)}님, 합계는 ${roundToDecimalPlace(total)}입니다.`;
}

giveTotal('sara', 10.3333333);
// "Sara님, 합계는 10.33입니다."

export { giveTotal };
