// #START:dog
const dogs = [
  {
    이름: '맥스',
    크기: '소형견',
    견종: '보스턴 테리어',
    색상: '검정색',
  },
  {
    이름: '도니',
    크기: '대형견',
    견종: '래브라도레트리버',
    색상: '검정색',
  },
  {
    이름: '섀도',
    크기: '중형견',
    견종: '래브라도레트리버',
    색상: '갈색',
  },
];
// #END:dogs
// #START:colors
function getColors(dogs) {
  return dogs.map(dog => dog.color);
}

getColors(dogs);

// ['black', 'black', 'chocolate']

// #END:colors

// #START:unique

function getUnique(attributes) {
  const unique = [];
  for (const attribute of attributes) {
    if (!unique.includes(attribute)) {
      unique.push(attribute);
    }
  }
  return unique;
}

const colors = getColors(dogs);
getUnique(colors);
// ['black', 'chocolate']

// #END:unique

export { getColors, getUnique };
