import expect from 'expect';

import { getTotal, mutableDiscount, discountable } from './const';

it('합계 금액을 가져올 수 있다', () => {
  expect(getTotal()).toEqual('구매 금액은 110입니다.');
});

describe('할인 상품', () => {
  const cart = [
    {
      item: 'Book',
      discountAvailable: false,
    },
    {
      item: 'Magazine',
      discountAvailable: true,
    },
  ];

  it('할인 상품을 가져올 수 있다', () => {
    expect(mutableDiscount(cart).length).toEqual(1);
  });

  it('할인 상품을 가져올 수 있다', () => {
    expect(discountable(cart).length).toEqual(1);
  });
});
