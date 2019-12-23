/* eslint-disable no-nested-ternary, no-unused-vars */

function configureTimePermissions({ title }) {
  // #START:problem
  const permissions = title === '부장' || title === '과장' ?
    title === '과장' ?
      ['근로시간', '초과근무승인', '수당'] : ['근로시간', '초과근무승인']
    : ['근로시간'];
  // #END:problem
  return permissions;
}

// #START:func
function getTimePermissions({ title }) {
  if (title === '과장') {
    return ['근로시간', '초과근무승인', '수당'];
  }

  if (title === '부장') {
    return ['근로시간', '초과근무승인'];
  }
  return ['근로시간'];
}

const permissions = getTimePermissions({ title: '사원' });
// ['근로시간']
// #END:func

export { configureTimePermissions };
