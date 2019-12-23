import expect from 'expect';
import { addBookDefaults, deepMerge, updateBookYear, updateBookTitle } from './objectSpread';

describe('펼침 연산자 테스트', () => {
  it('출판연도를 수정할 수 있다', () => {
    const updated = {
      title: 'Reasons and Persons',
      author: 'Derek Parfit',
      year: 1984,
    };

    expect(updateBookYear()).toEqual(updated);
  });

  it('저자를 수정할 수 있다', () => {
    const updated = {
      title: 'Reasons & Persons',
      author: 'Derek Parfit',
    };
    expect(updateBookTitle()).toEqual(updated);
  });

  it('기본값을 추가할 수 있다', () => {
    const bookUpdated = addBookDefaults();
    expect(bookUpdated.title).toEqual('ES6 Tips');
    expect(bookUpdated.year).toEqual(2017);
  });

  it('깊은 병합을 처리할 수 있다', () => {
    const [name1, name2] = deepMerge();
    expect(name1).not.toEqual(name2);
  });
});
