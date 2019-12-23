import expect from 'expect';

import { addClick } from './problem';
import { addClick as addClickCurry } from './curry';
import { addClick as addClickLet } from './scope';

describe('let 유효범위', () => {
  it('유효범위 문제가 있어야 한다', () => {
    const items = [
      {},
      {},
    ];
    addClick(items);
    expect(items[0].onClick()).toEqual(2);
    expect(items[1].onClick()).toEqual(2);
  });

  it('유효범위 문제가 없어야 한다', () => {
    const items = [
      {},
      {},
    ];
    addClickCurry(items);
    expect(items[0].onClick()).toEqual(0);
    expect(items[1].onClick()).toEqual(1);
  });

  it('유효범위 문제가 없어야 한다', () => {
    const items = [
      {},
      {},
    ];
    addClickLet(items);
    expect(items[0].onClick()).toEqual(0);
    expect(items[1].onClick()).toEqual(1);
  });
});
