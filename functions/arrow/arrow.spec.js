import expect from 'expect';

import {
  discounter as discountProblem,
  getFullName as fullProblem,
  getName as nameProblem,
  name,
} from './problem';

import {
  comic,
  discounter,
  getFullName,
  getName,
  getNameAndLocation,
} from './arrow';

describe('문제', () => {
  it('이름을 가져올 수 있다', () => {
    expect(nameProblem(name)).toEqual('Lemmy Kilmister');
  });

  it('객체를 반환할 수 있다', () => {
    expect(fullProblem(name)).toEqual({ fullName: 'Lemmy Kilmister' });
  });

  it('고차 함수를 반환할 수 있다', () => {
    expect(discountProblem(0.1)(100)).toEqual(90);
  });
});

describe('화살표 함수', () => {
  it('입력을 해체할당할 수 있다', () => {
    expect(getName(comic)).toEqual('Peter Bagge');
  });

  it('객체를 반환할 수 있다', () => {
    expect(getFullName(comic)).toEqual({ fullName: 'Peter Bagge' });
  });

  it('객체를 반환할 수 있다', () => {
    expect(getNameAndLocation(comic)).toEqual({
      fullName: 'Peter Bagge',
      location: 'Seattle, Washington',
    });
  });

  it('고차 함수를 반환할 수 있다', () => {
    expect(discounter(0.1)(100)).toEqual(90);
  });
});
