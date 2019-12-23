import expect from 'expect';
import {
  cart,
  reward,
  summarizeCart,
  summarizeCartUpdated,
} from './push';

describe('push', () => {
  it('처음에는 error를 반환하지 않아야 한다', () => {
    const testCart = [...cart];
    const updated = [...cart, reward];
    expect(summarizeCart(testCart)).toEqual({
      discounts: 1,
      items: 4,
      cart: updated,
    });
  });

  it('다시 정렬됐을 때는 error를 반환해야 한다', () => {
    const testCart = [...cart];
    expect(summarizeCartUpdated(testCart)).toEqual({
      error: '할인 상품은 하나만 주문할 수 있습니다.',
    });
  });

  it('전개 구문을 사용했을 때 error를 반환하지 않아야 한다', () => {
    const testCart = [...cart];
    const updated = [...cart, reward];
    expect(summarizeCart(testCart)).toEqual({
      discounts: 1,
      items: 4,
      cart: updated,
    });
  });
});
