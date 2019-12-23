/* eslint-disable */
// START:dogs
const dogs = [
  {
    이름: '맥스',
    무게: 10,
    견종: '보스턴 테리어',
    지역: '위스콘신',
    색상: '검정색',
  },
  {
    이름: '도니',
    무게: 90,
    견종: '래브라도레트리버',
    지역: '캔자스',
    색상: '검정색',
  },
  {
    이름: '섀도',
    무게: 40,
    견종: '래브라도레트리버',
    지역: '위스콘신',
    색상: '갈색',
  },
];
// END:dogs

// START: func
function getDogNames(dogs, filterFunc) {
  return dogs
  .filter(filterFunc)
  .map(dog => dog['이름'])
}

getDogNames(dogs, dog => dog['무게'] < 20);
// ['맥스']
// END: func

// START:curry
const weightCheck = weight => dog => dog['무게'] < weight;

getDogNames(dogs, weightCheck(20));
// ['맥스']

getDogNames(dogs, weightCheck(50));
// ['맥스', '섀도']
// END:curry

// START:identity
const identity = field => value => dog => dog[field] === value;
const colorCheck = identity('색상');
const stateCheck = identity('지역');

getDogNames(dogs, colorCheck('갈색'));
// ['섀도']

getDogNames(dogs, stateCheck('캔자스'));
// ['섀도']
// END:identity

// START:all
function allFilters(dogs, ...checks) {
  return dogs
  .filter(dog => checks.every(check => check(dog)))
  .map(dog => dog['이름']);
}
allFilters(dogs, colorCheck('검정색'), stateCheck('캔자스'));
// ['도니']

function anyFilters(dogs, ...checks) {
  return dogs
  .filter(dog => checks.some(check => check(dog)))
  .map(dog => dog['이름']);
}

anyFilters(dogs, weightCheck(20), colorCheck('갈색'));
// ['맥스', '섀도']
// END:all

export { anyFilters, dogs, getDogNames, colorCheck, weightCheck, stateCheck, allFilters }
