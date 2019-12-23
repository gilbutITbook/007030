import expect from 'expect';

import { generateLink as generateConcat } from './problem';
import { generateLink, greet, leapYearConverter, yell } from './literals';

describe('링크 생성', () => {
  const link = 'https://pragprog.com/cloud/foo?width=200';
  const image = 'foo';
  const width = 200.5;
  it('문자열 연결로 링크를 생성할 수 있다', () => {
    expect(generateConcat(image, width)).toEqual(link);
  });

  it('템플릿 리터럴로 링크를 생성할 수 있다', () => {
    expect(generateLink(image, width)).toEqual(link);
  });
});

describe('템플릿 리터럴의 예', () => {
  it('변수를 이용할 수 있다', () => {
    const result = 'Hi, Leo';
    expect(greet('Leo')).toEqual(result);
  });

  it('변수에 메서드를 호출할 수 있다', () => {
    const result = 'HI, PANKAJ!';
    expect(yell('Pankaj')).toEqual(result);
  });

  it('템플릿을 함수로 변환할 수 있다', () => {
    const result = '윤년에 태어났다면 8살이야.';
    expect(leapYearConverter(34)).toEqual(result);
  });
});
