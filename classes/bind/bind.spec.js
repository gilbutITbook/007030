import expect from 'expect';

import {
  Validator as ValidatorProblem,
} from './problem';

import { Validator } from './bind';

import {
  Validator as ValidatorArrow,
} from './constructorArrow';

import {
  Validator as ValidatorConstructor,
} from './constructor';

import {
  Validator as ValidatorProperties,
} from './properties';

describe('유효성 검사', () => {
  it('this 바인딩이 되지 않아야 한다', () => {
    try {
      // START: problem
      const validator = new ValidatorProblem();
      validator.setInvalidMessages('도시');
      // TypeError: Cannot read property 'message' of undefined
      // END: problem
    } catch (e) {
      expect(e.message).toEqual("Cannot read property 'message' of undefined");
    }
  });

  it('map에서 this에 바인딩할 수 있다', () => {
    const v = new Validator();
    const message = '도시가 유효하지 않습니다.';
    expect(v.setInvalidMessages('도시')).toEqual([message]);
  });

  it('constructor에서 화살표 함수를 사용할 수 있다', () => {
    const v = new ValidatorArrow();
    const message = '도시가 유효하지 않습니다.';
    expect(v.setInvalidMessages('도시')).toEqual([message]);
  });

  it('constructor에서 this 바인딩을 처리할 수 있다', () => {
    const v = new ValidatorConstructor();
    const message = '도시가 유효하지 않습니다.';
    expect(v.setInvalidMessages('도시')).toEqual([message]);
  });

  it('비공개 속성을 가질 수 있다', () => {
    const v = new ValidatorProperties();
    expect(v.message).toEqual('가 유효하지 않습니다.');
  });

  it('화살표 함수로 this를 바인딩할 수 있다', () => {
    const v = new ValidatorProperties();
    const message = '도시가 유효하지 않습니다.';
    expect(v.setInvalidMessages('도시')).toEqual([message]);
  });
});
