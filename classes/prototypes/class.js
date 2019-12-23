/* eslint-disable func-names */
// START:class
class Coupon {
  constructor(price, expiration) {
    this.price = price;
    this.expiration = expiration || '2주';
  }

  getExpirationMessage() {
    return `이 쿠폰은 ${this.expiration} 후에 만료됩니다.`;
  }
}

const saleCoupon = new Coupon(5, '2개월');
saleCoupon.getExpirationMessage();
// 이 쿠폰은 2개월 후에 만료됩니다.

// END:class

class FlashCoupon extends Coupon {
  constructor(...args) {
    super(args);
    this.expiration = '2시간';
  }

  getExpirationMessage() {
    return `이 쿠폰은 깜짝 쿠폰이며 ${this.expiration} 후에 만료됩니다.`;
  }
}

export { Coupon, FlashCoupon };
