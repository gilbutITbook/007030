/* eslint-disable no-unused-vars */

const filters = new Map()
  .set('색상', '검정색')
  .set('견종', '래브라도레트리버');

// START:get
function getAppliedFilters(filters) {
  const applied = [...filters].map(([key, value]) => {
    return `${key}:${value}`;
  });
  return `선택한 조건은 ${applied.join(', ')} 입니다.`;
}

// '선택한 조건은 색상:검정색, 견종:래브라도레트리버 입니다.'
// END:get

function sortByKey(a, b) {
  return a[0] > b[0] ? 1 : -1;
}

// START:sort
function getSortedAppliedFilters(filters) {
  const applied = [...filters]
    .sort(sortByKey)
    .map(([key, value]) => {
      return `${key}:${value}`;
    })
    .join(', ');

  return `선택한 조건은 ${applied} 입니다.`;
}
// '선택한 조건은 견종:래브라도레트리버, 색상:검정색 입니다.'
// END:sort

export { getAppliedFilters, getSortedAppliedFilters };
