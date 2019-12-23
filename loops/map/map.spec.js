import expect from 'expect';
import { getInstruments, getInstruments2 } from './map';
import { getInstruments as g1, getInstruments2 as g2 } from './full';

describe('for 문', () => {
  const band = [
    {
      name: '코벳',
      instrument: '기타',
    },
    {
      name: '에반',
      instrument: '기타',
    },
    {
      name: '션',
      instrument: '베이스',
    },
    {
      name: '브렛',
      instrument: '드럼',
    },
  ];

  it('악기를 가져올 수 있다', () => {
    expect(g1(band)).toEqual(['기타', '기타', '베이스', '드럼']);
  });

  it('함수를 이용해서 악기를 가져올 수 있다', () => {
    expect(g2(band)).toEqual(['기타', '기타', '베이스', '드럼']);
  });
});

describe('map 메서드', () => {
  it('악기를 가져올 수 있다', () => {
    expect(getInstruments()).toEqual(['기타', '기타', '베이스', '드럼']);
  });

  it('익명함수를 이용해서 악기를 가져올 수 있다', () => {
    expect(getInstruments2()).toEqual(['기타', '기타', '베이스', '드럼']);
  });
});
