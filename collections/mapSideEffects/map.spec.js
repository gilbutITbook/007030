import expect from 'expect';

import { applyDefaults } from './map';

import { applyDefaults as applySideEffects } from './sideEffects';

import { applyDefaults as applyCopy } from './copy';

describe('Map 객체에 기본값 적용하기', () => {
  it('원본을 조작할 수 있다', () => {
    const defaults = new Map()
      .set('색상', '갈색')
      .set('견종', '비글')
      .set('지역', '캔자스');


    const filters = new Map()
      .set('색상', '검정색');

    applySideEffects(filters, defaults);

    expect(filters.get('색상')).toEqual('검정색');
    expect(filters.get('지역')).toEqual('캔자스');
  });

  it('새로운 키-값 쌍을 추가할 수 있다', () => {
    const defaults = new Map()
      .set('색상', '갈색')
      .set('견종', '비글')
      .set('지역', '캔자스');


    const filters = new Map()
      .set('색상', '검정색');

    const update = applyCopy(filters, defaults);
    expect(update.get('색상')).toEqual('검정색');
    expect(update.get('지역')).toEqual('캔자스');
  });

  it('새로운 키-값 쌍을 추가할 수 있다', () => {
    const defaults = new Map()
      .set('색상', '갈색')
      .set('견종', '비글')
      .set('지역', '캔자스');


    const filters = new Map()
      .set('색상', '검정색');

    const update = applyDefaults(filters, defaults);
    expect(update.get('색상')).toEqual('검정색');
    expect(update.get('지역')).toEqual('캔자스');
  });
});
