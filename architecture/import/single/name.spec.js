import expect from 'expect';
import { greet } from './name';

describe('이름', () => {
  it('이름을 대문자로 변환할 수 있다', () => {
    expect(greet('ashley')).toEqual('Hello, Ashley!');
  });
});
