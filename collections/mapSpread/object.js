/* eslint-disable no-unused-vars, no-restricted-syntax */

//  # START:objectIterate
const filters = {
  color: 'black',
  breed: 'labrador',
};

function getAppliedFilters(filters) {
  const keys = Object.keys(filters);
  const applied = [];
  for (const key of keys) {
    applied.push(`${key}:${filters[key]}`);
  }
  return `선택한 조건은 ${applied.join(', ')} 입니다.`;
}

// '선택한 조건은 색상:검정색, 견종:래브라도레트리버 입니다.'
//  # END:objectIterate


//  # START:objectSortIterate
function getSortedAppliedFilters(filters) {
  const keys = Object.keys(filters);
  keys.sort();
  const applied = [];
  for (const key of keys) {
    applied.push(`${key}:${filters[key]}`);
  }
  return `선택한 조건은 ${applied.join(', ')} 입니다.`;
}
// '선택한 조건은 견종:래브라도레트리버, 색상:검정색 입니다.'
//  # END:objectSortIterate

export {
  getAppliedFilters,
  getSortedAppliedFilters,
};
