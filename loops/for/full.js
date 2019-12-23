function checkConflicts(firms, isAvailable) {
  // START:reduce
  const message = [...firms].reduce((availability, firm) => {
    const [id, name] = firm;
    if (!isAvailable(id)) {
      return `${name}는 사용할 수 없습니다`;
    }
    return availability;
  }, '모든 회사를 사용할 수 있습니다');
  return message;
  // END:reduce
}

function findConflicts(firms, isAvailable) {
  // START:find
  const unavailable = [...firms].find(firm => {
    const [id] = firm;
    return !isAvailable(id);
  });

  if (unavailable) {
    return `${unavailable[1]}는 사용할 수 없습니다`;
  }

  return '모든 회사를 사용할 수 있습니다';
  // END:find
}

function isValid(registration) {
  const message = Object.keys(registration).reduce((valid, field) => {
    if (!registration[field]) {
      return `${field}가 입력되지 않았습니다`;
    }
    return valid;
  }, '');
  return message || '감사합니다';
}

export { checkConflicts, findConflicts, isValid };
