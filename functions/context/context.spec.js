import expect from 'expect';

import { validator } from './context';

import {
  validator as validatorBasic,
} from './basic';

import {
  validator as validatorProblem,
} from './problem';

import {
  validator as validatorMethod,
} from './method';


describe('유효성 검사', () => {
  const field = '도시';
  it('유효하지 않은 경우의 메시지를 설정할 수 있다', () => {
    const message = '도시는 유효하지 않습니다.';
    expect(validatorBasic.setInvalidMessage(field)).toEqual(message);
  });
  it('map 함수의 문맥에 접근할 수 없다', () => {
    try {
      // START: problem
      validatorProblem.setInvalidMessages(field);
      // TypeError: Cannot read property 'message' of undefined
      // END: problem
    } catch (e) {
      expect(e.message).toEqual("Cannot read property 'message' of undefined");
    }
  });

  it('화살표 함수로 문맥에 접근할 수 있다', () => {
    const messages = ['도시는 유효하지 않습니다.'];
    expect(validator.setInvalidMessages(field)).toEqual(messages);
  });

  it('map 함수의 문맥에 접근할 수 없다', () => {
    try {
      // START: problemMethod
      validatorMethod.setInvalidMessage(field);
      // TypeError: Cannot read property 'message' of undefined
      // END: problemMethod
    } catch (e) {
      expect(e.message).toEqual("Cannot read property 'message' of undefined");
    }
  });
});
