/* eslint-disable dot-notation */

// START:class
class Coupon {
  constructor(price, expiration) {
    this.price = price;
    this.expiration = expiration || '2주';
  }
}

const coupon = new Coupon(5);
coupon.price;
// 5
coupon['expiration'];
// '2주'
// END:class

export default Coupon;
