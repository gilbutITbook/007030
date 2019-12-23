// START: method
class Coupon {
  constructor(price, expiration) {
    this.price = price;
    this.expiration = expiration || '2주';
  }

  getPriceText() {
    return `$ ${this.price}`;
  }

  getExpirationMessage() {
    return `이 쿠폰은 ${this.expiration} 후에 만료됩니다.`;
  }
}

const coupon = new Coupon(5);
coupon.getPriceText();
// '$ 5'
coupon.getExpirationMessage();
// '이 쿠폰은 2주 후에 만료됩니다.'

// END: method

export default Coupon;
