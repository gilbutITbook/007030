// START: func
const validator = {
  message: '는 유효하지 않습니다.',
  setInvalidMessages(...fields) {
    return fields.map(field => {
      return `${field}${this.message}`;
    });
  },
};

validator.setInvalidMessages('도시');
// ['도시는 유효하지 않습니다.']
// END: func

export { validator };
