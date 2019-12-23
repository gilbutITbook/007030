function checkConflicts(firms, isAvailable) {
  // START:loop
  const entries = [...firms];
  for (let i = 0; i < entries.length; i++) {
    const [id, name] = entries[i];
    if (!isAvailable(id)) {
      return `${name}는 사용할 수 없습니다`;
    }
  }
  return '모든 회사를 사용할 수 있습니다';
  // END:loop
}

export { checkConflicts };
