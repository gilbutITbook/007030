import expect from 'expect';
import {
  convertWeight as convertWeightSimple,
} from './simple';

import {
  convertWeight as convertWeightMore,
} from './more';

import {
  convertWeight as convertWeightProblem,
} from './problem';

import {
  convertWeight,
} from './default';

describe('무게 환산', () => {
  it('파운드를 킬로그램으로 환산할 수 있다', () => {
    expect(convertWeightSimple(44)).toEqual(20);
    expect(convertWeightMore(44)).toEqual(20);
    expect(convertWeightProblem(44)).toEqual(20);
    expect(convertWeight(44)).toEqual(20);
  });

  it('파운드를 그램으로 환산할 수 있다', () => {
    expect(convertWeightMore(44, 11)).toEqual(20.3125);
    expect(convertWeightProblem(44, 11)).toEqual(20.31);
    expect(convertWeight(44, 11)).toEqual(20.31);
  });

  it('소수점 반올림 할 수 있다', () => {
    expect(convertWeightProblem(44, 8, 2)).toEqual(20.23);
    expect(convertWeight(44, 8, 2)).toEqual(20.23);
    expect(convertWeightProblem(44, undefined, 2)).toEqual(20);
    expect(convertWeight(44, undefined, 2)).toEqual(20);
  });

  it('거짓 값으로도 정확하게 반올림 할 수 있다', () => {
    expect(convertWeightProblem(44, 11, 0)).toEqual(20);
    expect(convertWeight(44, 11, 0)).toEqual(20);
  });
});
