import expect from 'expect';
import { getIconPath, getImage } from './shortCircuiting';
import { getIconPath as getPathTernary, getImage as getIconTernary, getImageOneLine } from './ternary';
import { getImage as getConditional } from './conditional';

describe('짧은 삼항 연산자 OR', () => {
  it('첫번째 값이 있으면 가져온다', () => {
    const image = {
      path: 'foo/bar.png',
    };
    const url = 'https://assets.foo.com/foo/bar.png';

    expect(getPathTernary(image)).toEqual(url);
  });

  it('첫번째 값이 없으면 두번째 값을 가져온다', () => {
    const image = {
    };
    const url = 'https://assets.foo.com/uploads/default.png';
    expect(getPathTernary(image)).toEqual(url);
  });
});

describe('삼항 연산자 &&', () => {
  it('첫번째 조건에 일치하지 않으면 중단한다', () => {
    const userConfig = {
    };
    const image = 'default.png';

    expect(getIconTernary(userConfig)).toEqual(image);
  });

  it('두번째 조건에 일치하지 않으면 계속 진행한다', () => {
    const userConfig = {
      images: [
        'foo.png',
      ],
    };
    const image = 'foo.png';

    expect(getIconTernary(userConfig)).toEqual(image);
  });
});

describe('단락 평가 ||', () => {
  it('첫번째 값이 있으면 가져온다', () => {
    const image = {
      path: 'foo/bar.png',
    };
    const url = 'https://assets.foo.com/foo/bar.png';

    expect(getIconPath(image)).toEqual(url);
  });

  it('첫번째 값이 없으면 두번째 값을 가져온다', () => {
    const image = {
    };
    const url = 'https://assets.foo.com/uploads/default.png';
    expect(getIconPath(image)).toEqual(url);
  });
});

describe('단락 평가 &&', () => {
  it('첫번째 조건에 일치하지 않으면 중단한다', () => {
    const userConfig = {
    };
    const image = 'default.png';

    expect(getImage(userConfig)).toEqual(image);
  });

  it('두번째 조건에 일치하지 않으면 계속 진행한다', () => {
    const userConfig = {
      images: [
        'foo.png',
      ],
    };
    const image = 'foo.png';

    expect(getImage(userConfig)).toEqual(image);
  });
});

describe('조건문 &&', () => {
  it('첫번째 조건에 일치하지 않으면 중단한다', () => {
    const userConfig = {
    };
    const image = 'default.png';

    expect(getConditional(userConfig)).toEqual(image);
  });

  it('두번째 조건에 일치하지 않으면 계속 진행한다', () => {
    const userConfig = {
      images: [
        'foo.png',
      ],
    };
    const image = 'foo.png';

    expect(getConditional(userConfig)).toEqual(image);
  });
});

describe('한 줄로 처리하는 getImage', () => {
  it('첫번째 조건에 일치하지 않으면 중단한다', () => {
    const userConfig = {
    };
    const image = 'default.png';

    expect(getImageOneLine(userConfig)).toEqual(image);
  });

  it('두번째 조건에 일치하지 않으면 중단한다', () => {
    const userConfig = {
      images: [],
    };
    const image = 'default.png';

    expect(getImageOneLine(userConfig)).toEqual(image);
  });

  it('세번째 조건에 일치하지 않으면 중단한다', () => {
    const userConfig = {
      images: ['logo.gif'],
    };
    const image = 'default.png';

    expect(getImageOneLine(userConfig)).toEqual(image);
  });

  it('모든 것을 통과하면 이미지를 사용한다', () => {
    const userConfig = {
      images: ['logo.png'],
    };

    expect(getImageOneLine(userConfig)).toEqual('logo.png');
  });
});
