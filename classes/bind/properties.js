// START:func
class Validator {
  message = '가 유효하지 않습니다.';

  setMessage = field => `${field}${this.message}`;

  setInvalidMessages(...fields) {
    return fields.map(this.setMessage);
  }
}
// END:func

export { Validator };
