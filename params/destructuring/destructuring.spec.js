import expect from 'expect';

import {
  displayPhoto as displayProblem,
} from './problem';

import {
  displayPhoto as displayAlt,
} from './alternate';

import {
  anonymous,
  displayPhoto,
  landscape,
} from './destructuring';

describe('사진사 정보 형식', () => {
  const photoMarkup = `
    <img alt="Landscape 사진 Nathan 촬영" src="/landscape-nm.jpg" />
    <div>Landscape</div>
    <div>Nathan</div>
    <div>위도: 32.7122222 </div>
    <div>경도: -103.1405556 </div>
    <div>equipment: Canon <br/> format: digital</div>
  `;

  const anonymousPhoto = `
    <img alt="Kids 사진 Anonymous 촬영" src="/garden.jpg" />
    <div>Kids</div>
    <div>Anonymous</div>
    <div>위도: 38.9675338 </div>
    <div>경도: -95.2614205 </div>
    <div>equipment: Nikon</div>
  `;
  it('해체할당을 사용하지 않고 사진사 정보 형식을 반환할 수 있다', () => {
    expect(displayProblem(landscape)).toEqual(photoMarkup);
    expect(displayProblem(anonymous)).toEqual(anonymousPhoto);
  });

  it('해체할당을 사용해서 사진사 정보 형식을 반환할 수 있다', () => {
    expect(displayPhoto(landscape)).toEqual(photoMarkup);
    expect(displayPhoto(anonymous)).toEqual(anonymousPhoto);
  });

  it('함수 몸체에서 해체할당을 사용해서 사진사 정보 형식을 반환할 수 있다', () => {
    expect(displayAlt(landscape)).toEqual(photoMarkup);
    expect(displayAlt(anonymous)).toEqual(anonymousPhoto);
  });
});
