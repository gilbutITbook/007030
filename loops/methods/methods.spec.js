import expect from 'expect';
import { getPrices, getPrices2 } from './methods';
import { getPrices as gProblem, getPrices2 as gProblem2 } from './problem';

describe('가격 변환 메서드 문제', () => {
  it('문자열 가격을 숫자로 바꿀 수 있다', () => {
    expect(gProblem()).toEqual([1.0, 2.15]);
  });

  it('문자열 가격을 숫자로 가져바꿀올 수 있다', () => {
    expect(gProblem2()).toEqual([1.0, 2.15]);
  });
});

describe('가격 변환 메서드 해결', () => {
  it('문자열 가격을 숫자로 바꿀 수 있다', () => {
    expect(getPrices()).toEqual([1.0, 2.15]);
  });

  it('문자열 가격을 숫자로 바꿀 수 있다', () => {
    expect(getPrices2()).toEqual([1.0, 2.15]);
  });
});
