import expect from 'expect';
import { addBookDefaults } from './problem';

describe('Object.assign 테스트', () => {
  const defaults = {
    author: '',
    title: '',
    year: 2017,
    rating: null,
  };

  const book = {
    title: 'Simplifying JavaScript',
    author: 'Joe Morgan',
  };

  it('기본값을 추가할 수 있다', () => {
    const bookUpdated = addBookDefaults(book, defaults);
    expect(bookUpdated.title).toEqual('Simplifying JavaScript');
    expect(bookUpdated.year).toEqual(2017);
  });

  it('Object.assign으로 기본값을 추가할 수 있다', () => {
    const copy = Object.assign({}, defaults);
    const book2 = {
      title: 'Another book',
      year: 2016,
    };
    const bookUpdated = Object.assign(copy, book);
    expect(bookUpdated.title).toEqual('Simplifying JavaScript');
    expect(bookUpdated.author).toEqual('Joe Morgan');
    expect(bookUpdated.year).toEqual(2017);
    const bookUpdated2 = Object.assign(copy, book2);
    expect(bookUpdated2.title).toEqual('Another book');
    expect(bookUpdated2.author).toEqual('Joe Morgan');
    expect(bookUpdated2.year).toEqual(2016);
  });

  it('Object.assign으로 기본값을 추가할 수 있다', () => {
    const bookUpdated = Object.assign({}, defaults, book);
    expect(bookUpdated.title).toEqual('Simplifying JavaScript');
    expect(bookUpdated.year).toEqual(2017);
  });
});
