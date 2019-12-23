import expect from 'expect';

import {
  getUnique as uniqueLoop,
} from './unique';

import {
  getUnique,
  getUniqueColors,
  getUniqueColorsReduce,
} from './set';

describe('set', () => {
  it('반복문으로 중복을 제거할 수 있다', () => {
    const colors = ['검정색', '검정색', '갈색', '노란색'];
    expect(uniqueLoop(colors)).toEqual(['검정색', '갈색', '노란색']);
  });

  it('Set으로 중복을 제거할 수 있다', () => {
    const colors = ['검정색', '검정색', '갈색', '노란색'];
    expect(getUnique(colors)).toEqual(['검정색', '갈색', '노란색']);
  });

  it('Set으로 중복된 색상이 없는 결과를 얻을 수 있다', () => {
    const dogs = [
      {
        이름: '맥스',
        크기: '소형견',
        견종: '보스턴 테리어',
        색상: '검정색',
      },
      {
        이름: '도니',
        크기: '대형견',
        견종: '래브라도레트리버',
        색상: '검정색',
      },
      {
        이름: '섀도',
        크기: '중형견',
        견종: '래브라도레트리버',
        색상: '갈색',
      },
    ];
    expect(getUniqueColors(dogs)).toEqual(['검정색', '갈색']);
  });

  it('Set과 reduce로 중복된 색상이 없는 결과를 얻을 수 있다', () => {
    const dogs = [
      {
        이름: '맥스',
        크기: '소형견',
        견종: '보스턴 테리어',
        색상: '검정색',
      },
      {
        이름: '도니',
        크기: '대형견',
        견종: '래브라도레트리버',
        색상: '검정색',
      },
      {
        이름: '섀도',
        크기: '중형견',
        견종: '래브라도레트리버',
        색상: '갈색',
      },
    ];
    expect(getUniqueColorsReduce(dogs)).toEqual(['검정색', '갈색']);
  });
});
