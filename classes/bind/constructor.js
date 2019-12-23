// START:func
class Validator {
  constructor() {
    this.message = '가 유효하지 않습니다.';
    this.setInvalidMessage = this.setInvalidMessage.bind(this);
  }

  setInvalidMessage(field) {
    return `${field}${this.message}`;
  }

  setInvalidMessages(...fields) {
    return fields.map(this.setInvalidMessage);
  }
}
// END:func

export { Validator };
