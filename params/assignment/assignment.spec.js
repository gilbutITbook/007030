import expect from 'expect';
import {
  landscape,
  setRegion,
  getCityAndState,
  update,
} from './assignment';

describe('지역 정보 설정', () => {
  it('시와 주를 추가할 수 있다', () => {
    expect(setRegion(landscape)).toEqual(update);
  });

  it('시와 주를 가져올 수 있다', () => {
    expect(getCityAndState(landscape)).toEqual({
      city: 'Hobbs',
      state: 'NM',
    });
  });
});
