import expect from 'expect';
import Coupon from './extend';
import { FlashCoupon } from './flash';

describe('coupon', () => {
  it('사용자에게 혜택을 줄 수 있다', () => {
    const coupon = new Coupon(10);
    const user = {
      rewardsEligible: true,
      active: true,
    };
    expect(coupon.price).toEqual(10);
    coupon.getRewards(user);
    expect(coupon.price).toEqual(9);
  });

  it('대상이 아닌 사용자에게는 혜택을 주지 않아야 한다', () => {
    const coupon = new Coupon(10);
    const user = {
      rewardsEligible: true,
      active: false,
    };
    expect(coupon.price).toEqual(10);
    coupon.getRewards(user);
    expect(coupon.price).toEqual(10);
  });
});

describe('깜짝 쿠폰', () => {
  it('부모 constructor를 호출할 수 있다', () => {
    const flash = new FlashCoupon(5);
    expect(flash.price).toEqual(5);
  });

  it('메서드를 상속 받을 수 있다', () => {
    const flash = new FlashCoupon(5);
    expect(flash.getPriceText()).toEqual('$ 5');
  });

  it('부모 메서드를 덮어쓸 수 있다', () => {
    const flash = new FlashCoupon(5);
    const message = '이 쿠폰은 깜짝 쿠폰이며 2시간 후에 만료됩니다.';
    expect(flash.getExpirationMessage()).toEqual(message);
  });

  it('사용자 인증을 위해 부모 메서드를 호출할 수 있다', () => {
    const flash = new FlashCoupon(100);
    const user = {
      rewardsEligible: true,
      active: true,
    };
    flash.getRewards(user);
    expect(flash.price).toEqual(80);
  });

  it('비활성 사용자에게는 혜택을 주지 않아야 한다', () => {
    const flash = new FlashCoupon(100);
    const user = {
      rewardsEligible: true,
      active: false,
    };
    flash.getRewards(user);
    expect(flash.price).toEqual(100);
  });

  it('가격이 너무 낮으면 사용자에게 혜택을 주지 않아야 한다', () => {
    const flash = new FlashCoupon(10);
    const user = {
      rewardsEligible: true,
      active: true,
    };
    flash.getRewards(user);
    expect(flash.price).toEqual(10);
  });
});
