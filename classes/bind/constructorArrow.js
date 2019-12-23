// START:class
class Validator {
  constructor() {
    this.message = '가 유효하지 않습니다.';
    this.setInvalidMessage = field => `${field}${this.message}`;
  }

  setInvalidMessages(...fields) {
    return fields.map(this.setInvalidMessage);
  }
}
// END:class

export { Validator };
