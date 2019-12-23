// START:func
const validator = {
  message: '는 유효하지 않습니다.',
  setInvalidMessage(field) {
    return `${field}${this.message}`;
  },
};

validator.setInvalidMessage('도시');
// 도시는 유효하지 않습니다.
// END:func

export { validator };
