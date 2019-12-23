import expect from 'expect';

import Coupon from './get';
import CouponProblem from './problem';
import CouponGetters from './price';
import CouponSet from './set';

describe('get 문제', () => {
  it('가격을 문자열로 표시해야 한다', () => {
    const coupon = new CouponProblem(5);
    coupon.price = '$10';
    expect(coupon.getPriceText()).toEqual('$ $10');
  });
});

describe('getter', () => {
  const coupon = new CouponGetters(10);
  it('가격 문자열을 가져올 수 있다', () => {
    expect(coupon.priceText).toEqual('$ 10');
  });

  it('만료 기간 메시지를 가져올 수 있다', () => {
    const message = '이 쿠폰은 2주 후에 만료됩니다.';
    expect(coupon.expirationMessage).toEqual(message);
  });
});

describe('setter', () => {
  const coupon = new CouponSet(10);
  it('가격을 가져올 수 있다', () => {
    expect(coupon.price).toEqual(10);
  });

  it('절반 가격을 설정할 수 있다', () => {
    coupon.halfPrice = 40;
    expect(coupon.price).toEqual(20);
  });
});

describe('getter와 setter', () => {
  it('내부 변수를 가져올 수 있다', () => {
    const coupon = new Coupon(10);
    expect(coupon.price).toEqual(coupon._price);
  });

  it('내부 속성을 설정할 수 있다', () => {
    const coupon = new Coupon(10);
    expect(coupon.price).toEqual(10);
    coupon.price = 100;
    expect(coupon.price).toEqual(100);
  });

  it('설정할 때 정수로 변환할 수 있다', () => {
    const coupon = new Coupon(10);
    expect(coupon.price).toEqual(10);
    coupon.price = '$100';
    expect(coupon.price).toEqual(100);
  });

  it('메시지를 가져올 수 있다', () => {
    const coupon = new Coupon(10);
    expect(coupon.priceText).toEqual('$10');
  });
});
