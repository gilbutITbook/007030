import expect from 'expect';

import {
  getDogNames as getNamesFull,
} from './problem';

import {
  applyFilters,
  anyFilters,
  dogs,
  getDogNames,
  colorCheck,
  stateCheck,
  weightCheck,
} from './curry';

describe('curry', () => {
  it('커리 없이 함수를 적용할 수 있다', () => {
    expect(getNamesFull(dogs, ['색상', '검정색'])).toEqual(['맥스', '도니']);
  });
  it('보통의 함수로 강아지 이름을 가져올 수 있다', () => {
    expect(getDogNames(dogs, dog => dog['색상'] === '검정색')).toEqual(['맥스', '도니']);
  });
  it('커링 함수로 강아지 이름을 가져올 수 있다', () => {
    expect(getDogNames(dogs, weightCheck(20))).toEqual(['맥스']);
  });
  it('커링 함수로 강아지 이름을 가져올 수 있다', () => {
    expect(getDogNames(dogs, weightCheck(20))).toEqual(['맥스']);
  });
  it('여러 개의 함수를 적용할 수 있다', () => {
    expect(applyFilters(dogs, colorCheck('검정색'), stateCheck('캔자스'))).toEqual(['도니']);
  });
  it('여러 개의 함수를 적용할 수 있다', () => {
    expect(applyFilters(dogs, colorCheck('검정색'), stateCheck('캔자스'))).toEqual(['도니']);
  });
  it('여러 개의 함수를 적용할 수 있다', () => {
    expect(anyFilters(dogs, weightCheck(20), colorCheck('갈색'))).toEqual(['맥스', '섀도']);
  });
});
