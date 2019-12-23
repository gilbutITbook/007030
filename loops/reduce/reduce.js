/* eslint-disable no-unused-vars, func-names */

// Eric Elliot이 소개한 코드: https://twitter.com/_ericelliott/status/879356131633762305
// #START:pipe
const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);
// #END:pipe

// Need clever idea
function greetCity(city) {
  // #START:pipeCity
  function capitalize(word) {
    return word.split(' ')
      .map(s => s.slice(0, 1).toUpperCase() + s.slice(1))
      .join(' ');
  }

  function greet(location) {
    return `${location}에 오신 것을 환영합니다!`;
  }

  const greetCity = pipe(capitalize, greet);

  greetCity('kansas city');
  // Kansas City에 오신 것을 환영합니다!
  // #END:pipeCity

  return greetCity(city);
}

// #START:dogs
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

function getColors(dogs) {
  // #START:colors
  const colors = dogs.reduce((colors, dog) => { // <label id="reduce.params" />
    if (colors.includes(dog['색상'])) { // <label id="reduce.includes"/>
      return colors;
    }
    return [...colors, dog['색상']]; // <label id="reduce.returnUpdate" />
  }, []); // <label id="reduce.initial" />
  // #END:colors
  return colors;
}

function getAllColors(dogs) {
  // #START:allColors
  const colors = dogs.reduce((colors, dog) => {
    return [...colors, dog['색상']];
  }, []);
  // #END:allColors
  return colors;
}

function separate(dogs) {
  // #START:separate
  const filters = dogs.reduce((filters, item) => {
    filters.breed.add(item['견종']);
    filters.size.add(item['크기']);
    filters.color.add(item['색상']);
    return filters;
  },
  {
    breed: new Set(),
    size: new Set(),
    color: new Set(),
  });
  // #END:separate

  return filters;
}


// #START:developers
const developers = [
  {
    name: 'Jeff',
    language: 'php',
  },
  {
    name: 'Ashley',
    language: 'python',
  },
  {
    name: 'Sara',
    language: 'python',
  },
  {
    name: 'Joe',
    language: 'javascript',
  },
];
// #END:developers

function getSpecialtyCount(developers) {
  // #START:specialty
  const aggregated = developers.reduce((specialities, developer) => {
    const count = specialities[developer.language] || 0;
    return {
      ...specialities,
      [developer.language]: count + 1,
    };
  }, {});
  // #END:specialty

  return aggregated;
}

function getExact() {
  // #START:copy
  const callback = function (collectedValues, item) { // <label id="reduce.callback" />
    return [...collectedValues, item];
  };

  const saying = ['veni', 'vedi', 'veci'];
  const initialValue = [];
  const copy = saying.reduce(callback, initialValue); // <label id="reduce.method" />
  // #END:copy
  return copy;
}
export { developers, dogs, getAllColors, getColors, getSpecialtyCount, greetCity, separate };
