import expect from 'expect';
import CouponProblem from './problem';
import CouponSimple from './constructor';
import Coupon from './methods';

describe('클래스 기본', () => {
  it('클래스를 생성할 수 있다', () => {
    const coupon = new CouponProblem();
    expect(coupon instanceof CouponProblem).toEqual(true);
  });

  it('속성을 설정할 수 있다', () => {
    const coupon = new CouponSimple(5);
    expect(coupon.price).toEqual(5);
    expect(coupon.expiration).toEqual('2주');
  });

  it('메서드를 가질 수 있다', () => {
    const coupon = new Coupon(5);
    const message = '이 쿠폰은 2주 후에 만료됩니다.';

    expect(coupon.getPriceText()).toEqual('$ 5');
    expect(coupon.getExpirationMessage()).toEqual(message);
  });
});
