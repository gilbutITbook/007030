import expect from 'expect';

import { developers, dogs, getAllColors, getColors, getSpecialtyCount, greetCity, separate } from './reduce';
import { getColors as mistakeColors } from './mistake';
import { getAllColors as mapColors } from './map';

describe('리듀스(reduce)', () => {
  it('강아지 색상을 가져올 수 있다', () => {
    expect(getColors(dogs)).toEqual(['검정색', '갈색']);
  });

  it('반환되지 않을 때 알 수 있다', () => {
    let name;
    let message;
    try {
      mistakeColors(dogs);
    } catch (e) {
      name = e.constructor.name;
      message = e.message;
    }
    expect(name).toEqual('TypeError');
    expect(message).toEqual("Cannot read property 'includes' of undefined");
  });

  it('map 또는 reduce로 모든 색상을 가져올 수 있다', () => {
    const colors = getAllColors(dogs);
    const colorsMap = mapColors(dogs);
    const result = ['검정색', '검정색', '갈색'];
    expect(colors).toEqual(result);
    expect(colorsMap).toEqual(result);
  });

  it('모든 고유 속성을 가져올 수 있다', () => {
    const filters = separate(dogs);
    expect([...filters.breed]).toEqual(['보스턴 테리어', '래브라도레트리버']);
    expect([...filters.size]).toEqual(['소형견', '대형견', '중형견']);
    expect([...filters.color]).toEqual(['검정색', '갈색']);
  });

  it('언어별 개발자 수를 알 수 있다', () => {
    const result = {
      javascript: 1,
      php: 1,
      python: 2,
    };
    expect(getSpecialtyCount(developers)).toEqual(result);
  });

  it('결과를 연결할 수 있다', () => {
    expect(greetCity('kansas city')).toEqual('Kansas City에 오신 것을 환영합니다!');
  });
});
