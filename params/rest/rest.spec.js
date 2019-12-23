import expect from 'expect';
import {
  validateCharacterCount as validateSimple,
} from './simple';
import {
  getArguments as getArgumentsProblem,
  validateCharacterCount as validateProblem,
} from './problem';

import {
  getArguments,
  shift,
  validateCharacterCount,
} from './rest';

describe('단순한 글자수 유효성 검사', () => {
  it('배열을 전달했을 때 통과해야 한다', () => {
    expect(validateSimple(5, ['red', 'blue'])).toEqual(true);
    expect(validateSimple(5, ['red', 'blue', 'yellow'])).toEqual(false);
  });
  it('목록을 전달하면 오류가 발생해야 한다', () => {
    try {
      validateSimple(5, 'red', 'blue');
    } catch (e) {
      expect(e instanceof TypeError).toBe(true);
      expect(e.message).toEqual('items.every is not a function');
    }
  });
});

describe('글자수 유효성 검사 문제', () => {
  it('모든 태그가 제한글자수 이하인지 확인해야 한다', () => {
    expect(validateProblem(5, 'red', 'blue')).toEqual(true);
    expect(validateProblem(5, 'red', 'blue', 'yellow')).toEqual(false);
  });
  it('배열을 전달했을 때 통과해야 한다', () => {
    expect(validateProblem(5, ['red', 'blue'])).toEqual(true);
    expect(validateProblem(5, ['red', 'blue', 'yellow'])).toEqual(true);
  });
  it('인수를 전달받아야 한다', () => {
    expect(getArgumentsProblem('Bloomsday', 'June 16')[0]).toBe('Bloomsday');
    expect(getArgumentsProblem('Bloomsday', 'June 16')[1]).toBe('June 16');
  });
});

describe('글자수 유효성 검사 문제', () => {
  it('모든 태그가 제한글자수 이하인지 확인해야 한다', () => {
    expect(validateCharacterCount(5, 'red', 'blue')).toEqual(true);
    expect(validateCharacterCount(5, 'red', 'blue', 'yellow')).toEqual(false);
  });
  it('펼침 연산자를 이용해서 배열을 전달했을 때 통과해야 한다', () => {
    expect(validateProblem(5, ...['red', 'blue'])).toEqual(true);
    expect(validateProblem(5, ...['red', 'blue', 'yellow'])).toEqual(false);
  });
  it('인수를 전달받아야 한다', () => {
    expect(getArguments('Bloomsday', 'June 16')).toEqual(['Bloomsday', 'June 16']);
  });
  it('배열의 첫번째 항목과 나머지 항목이 분리되어야 한다', () => {
    expect(shift()).toEqual(['stop', ['collaborate', 'listen']]);
  });
});
