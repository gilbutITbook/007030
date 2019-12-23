/* eslint-disable no-console, no-unused-vars, no-restricted-syntax */

// START:iterate
const filters = new Map()
  .set('색상', '검정색')
  .set('견종', '래브라도레트리버');

function checkFilters(filters) {
  for (const entry of filters) {
    console.log(entry);
  }
}
// ['색상', '검정색']
// ['견종', '래브라도레트리버']
// END:iterate

// START:iterateGet
function getAppliedFilters(filters) {
  const applied = [];
  for (const [key, value] of filters) {
    applied.push(`${key}:${value}`);
  }
  return `선택한 조건은 ${applied.join(', ')} 입니다.`;
}

// '선택한 조건은 색상:검정색, 견종:래브라도레트리버 입니다.'
// END:iterateGet

// START:iterateSort
function sortByKey(a, b) {
  return a[0] > b[0] ? 1 : -1;
}

function getSortedAppliedFilters(filters) {
  const applied = [];
  for (const [key, value] of [...filters].sort(sortByKey)) {
    applied.push(`${key}:${value}`);
  }
  return `선택한 조건은 ${applied.join(', ')} 입니다.`;
}
// '선택한 조건은 견종:래브라도레트리버, 색상:검정색 입니다.'
// END:iterateSort

export { getAppliedFilters, getSortedAppliedFilters };
