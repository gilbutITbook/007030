import expect from 'expect';
import { removeItem as removeItemProblem } from './problem';
import { removeItem as removeItemSlice } from './slice';
import { removeItem as removeItemSplice } from './splice';
import { book, formatBook, removeItem } from './spread';

describe('펼침 연산자', () => {
  it('반복문으로 항목을 제거할 수 있다', () => {
    const before = ['apple', 'banana', 'orange'];
    const after = ['apple', 'orange'];
    expect(removeItemProblem(before, 'banana')).toEqual(after);
  });

  it('slice로 항목을 제거할 수 있다', () => {
    const before = ['apple', 'banana', 'orange'];
    const after = ['apple', 'orange'];
    expect(removeItemSlice(before, 'banana')).toEqual(after);
  });

  it('splice로 항목을 제거할 수 있다', () => {
    const before = ['apple', 'banana', 'orange'];
    const after = ['apple', 'orange'];
    expect(removeItemSplice(before, 'banana')).toEqual(after);
  });

  it('반복문으로 첫번째 항목을 제거할 수 있다', () => {
    const before = ['apple', 'banana', 'orange'];
    const after = ['banana', 'orange'];
    expect(removeItemProblem(before, 'apple')).toEqual(after);
  });

  it('slice로 첫번째 항목을 제거할 수 있다', () => {
    const before = ['apple', 'banana', 'orange'];
    const after = ['banana', 'orange'];
    expect(removeItemSlice(before, 'apple')).toEqual(after);
  });

  it('펼침 연산자로 첫번째 항목을 제거할 수 있다', () => {
    const before = ['apple', 'banana', 'orange'];
    const after = ['banana', 'orange'];
    expect(removeItem(before, 'apple')).toEqual(after);
  });

  it('splice로 항목을 여러번 제거할 수 있다', () => {
    const books = ['practical vim', 'moby dick', 'the dark tower'];
    removeItemSplice(books, 'moby dick');
    const novels = removeItemSplice(books, 'practical vim');
    expect(novels).toEqual(['the dark tower']);
  });

  it('펼침 연산자로 가격 표시를 처리할 수 있다', () => {
    const values = Object.values(book);
    expect(formatBook(...values)).toEqual('Reasons and Persons by Derek Parfit $19.99');
    expect(formatBook(...Object.values(book))).toEqual('Reasons and Persons by Derek Parfit $19.99');
  });

  it('반복문으로 수정할 수 없어야 한다', () => {
    const before = ['apple', 'banana', 'orange'];
    const after = ['apple', 'banana', 'orange'];
    expect(removeItemProblem(before, 'peach')).toEqual(after);
  });

  it('slice로 수정할 수 없어야 한다', () => {
    const before = ['apple', 'banana', 'orange'];
    const after = ['apple', 'banana', 'orange'];
    expect(removeItemSlice(before, 'peach')).toEqual(after);
  });

  it('splice로 수정할 수 없어야 한다', () => {
    const before = ['apple', 'banana', 'orange'];
    const after = ['apple', 'banana', 'orange'];
    expect(removeItemSplice(before, 'peach')).toEqual(after);
  });

  it('펼침 연산자로 수정할 수 없어야 한다', () => {
    const before = ['apple', 'banana', 'orange'];
    const after = ['apple', 'banana', 'orange'];
    expect(removeItem(before, 'peach')).toEqual(after);
  });
});
