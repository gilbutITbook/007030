import { dogs } from './curry';
// START: func
function getDogNames(dogs, filter) {
  const [key, value] = filter;
  return dogs
    .filter(dog => dog[key] === value)
    .map(dog => dog['이름']);
}

getDogNames(dogs, ['색상', '검정색']);
// ['맥스', '도니']
// END: func

export { getDogNames };
