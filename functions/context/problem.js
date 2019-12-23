/* eslint-disable no-unused-vars, no-param-reassign, no-console, func-names */

// START:func
const validator = {
  message: '는 유효하지 않습니다.',
  setInvalidMessages(...fields) {
    return fields.map(function (field) {
      return `${field}${this.message}`;
    });
  },
};
// END:func

export { validator };
