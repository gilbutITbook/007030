import expect from 'expect';
import {
  checkConflicts,
  firms,
} from './for';

import {
  checkConflicts as checkIn,
  firms as firmsIn,
} from './forin';

import {
  checkConflicts as checkConflictsFull,
  findConflicts,
} from './full';

import {
  checkConflicts as checkConflictsTrad,
} from './traditional';

describe('Map에 for문 사용하기', () => {
  it('결과가 부정이면 false를 반환해야 한다', () => {
    const soundscapeUnavailable = id => id !== 23;
    expect(checkConflicts(firms, soundscapeUnavailable)).toEqual('Soundscaping Source는 사용할 수 없습니다');
  });

  it('find를 이용하여 결과가 부정이면 false를 반환해야 한다', () => {
    const soundscapeUnavailable = id => id !== 23;
    expect(findConflicts(firms, soundscapeUnavailable)).toEqual('Soundscaping Source는 사용할 수 없습니다');
  });

  it('reduce를 이용하여 결과가 부정이면 false를 반환해야 한다', () => {
    const soundscapeUnavailable = id => id !== 23;
    expect(checkConflictsFull(firms, soundscapeUnavailable)).toEqual('Soundscaping Source는 사용할 수 없습니다');
  });

  it('for 문을 이용하여 결과가 부정이면 false를 반환해야 한다', () => {
    const soundscapeUnavailable = id => id !== 23;
    expect(checkConflictsTrad(firms, soundscapeUnavailable)).toEqual('Soundscaping Source는 사용할 수 없습니다');
  });

  it('결과가 긍정이면 true를 반환해야 한다', () => {
    const alwaysTrue = id => id;
    expect(checkConflicts(firms, alwaysTrue)).toEqual('모든 회사를 사용할 수 있습니다');
  });

  it('reduce를 이용하여 결과가 긍정이면 true를 반환해야 한다', () => {
    const alwaysTrue = id => id;
    expect(checkConflictsFull(firms, alwaysTrue)).toEqual('모든 회사를 사용할 수 있습니다');
  });

  it('find를 이용하여 결과가 긍정이면 true를 반환해야 한다', () => {
    const alwaysTrue = id => id;
    expect(findConflicts(firms, alwaysTrue)).toEqual('모든 회사를 사용할 수 있습니다');
  });

  it('for 문을 이용하여 결과가 긍정이면 true를 반환해야 한다', () => {
    const alwaysTrue = id => id;
    expect(checkConflictsTrad(firms, alwaysTrue)).toEqual('모든 회사를 사용할 수 있습니다');
  });
});

describe('객체에 for...in 문 적용', () => {
  it('for...in 문을 이용하여 결과가 부정이면 false를 반환해야 한다', () => {
    const soundscapeUnavailable = id => id !== 23;
    expect(checkIn(firmsIn, soundscapeUnavailable)).toEqual('Soundscaping Source는 사용할 수 없습니다');
  });

  it('for...in 문을 이용하여 결과가 긍정이면 true를 반환해야 한다', () => {
    const alwaysTrue = id => id;
    expect(checkIn(firmsIn, alwaysTrue)).toEqual('모든 회사를 사용할 수 있습니다');
  });
});
