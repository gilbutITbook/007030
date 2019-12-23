import expect from 'expect';
import { greetWithExcitement, key, capitalize, greet, formatUser } from './arrow';
import {
  key as keyF,
  capitalize as capitalizeF,
  formatUser as formatUserF,
  greetWithExcitement as greetWithExcitementF,
} from './full';

describe('보통의 함수', () => {
  it('매개변수를 받지 않을 수 있다', () => {
    expect(keyF()).toEqual('abc123');
  });

  it('매개변수를 하나 받을 수 있다', () => {
    expect(capitalizeF('joe')).toEqual('Joe');
  });

  it('매개변수를 여러개 받을 수 있다', () => {
    expect(greetWithExcitementF('joe')).toEqual('안녕, Joe!');
  });

  it('암묵적으로 반환할 수 있다', () => {
    expect(formatUserF('joe')).toEqual('Joe님이 로그인했습니다.');
  });

  it('콜백함수를 받을 수 있다', () => {
    expect(greetWithExcitementF()).toEqual('안녕, Joe!');
  });
});

describe('arrow functions', () => {
  it('매개변수를 받지 않을 수 있다', () => {
    expect(key()).toEqual('abc123');
  });

  it('매개변수를 하나 받을 수 있다', () => {
    expect(capitalize('joe')).toEqual('Joe');
  });

  it('매개변수를 여러개 받을 수 있다', () => {
    expect(greet('joe', 'morgan')).toEqual('안녕하세요, Joe Morgan님');
  });

  it('암묵적으로 반환할 수 있다', () => {
    expect(formatUser('joe')).toEqual('Joe님이 로그인했습니다.');
  });

  it('콜백함수를 받을 수 있다', () => {
    expect(greetWithExcitement()).toEqual('안녕, Joe!');
  });
});
