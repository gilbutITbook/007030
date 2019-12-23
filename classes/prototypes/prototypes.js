/* eslint-disable func-names */
// START:instance
function Coupon(price, expiration) {
  this.price = price;
  this.expiration = expiration || '2주';
}
const coupon = new Coupon(5, '2개월');
coupon.price;
// 5
// END:instance

// START:prototype
Coupon.prototype.getExpirationMessage = function () {
  return `이 쿠폰은 ${this.expiration} 후에 만료됩니다.`;
};
coupon.getExpirationMessage();
// 이 쿠폰은 2개월 후에 만료됩니다.

// END:prototype

// START:extend
class FlashCoupon extends Coupon {
  constructor(price, expiration) {
    super(price);
    this.expiration = expiration || '2시간';
  }

  getExpirationMessage() {
    return `이 쿠폰은 깜짝 쿠폰이며 ${this.expiration} 후에 만료됩니다.`;
  }
}
// END:extend

export { Coupon, FlashCoupon };
