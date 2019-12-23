import expect from 'expect';

import { Coupon, FlashCoupon } from './prototypes';

describe('프로토타입', () => {
  it('프토토타입이 메서드를 가질 수 있다', () => {
    const coupon = new Coupon(5, '2개월');
    const message = '이 쿠폰은 2개월 후에 만료됩니다.';
    expect(coupon.price).toEqual(5);
    expect(coupon.getExpirationMessage()).toEqual(message);
  });

  it('프로토타입을 확장할 수 있다', () => {
    const flash = new FlashCoupon(5);
    const message = '이 쿠폰은 깜짝 쿠폰이며 2시간 후에 만료됩니다.';
    expect(flash.price).toEqual(5);
    expect(flash.getExpirationMessage()).toEqual(message);
  });
});
