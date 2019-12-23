// START:solution
class Coupon {
  constructor(price, expiration) {
    this._price = price;
    this.expiration = expiration || '2주';
  }

  get priceText() {
    return `$${this._price}`;
  }

  get price() {
    return this._price;
  }

  set price(price) {
    const newPrice = price
      .toString()
      .replace(/[^\d]/g, '');
    this._price = parseInt(newPrice, 10);
  }

  get expirationMessage() {
    return `이 쿠폰은 ${this.expiration} 후에 만료됩니다.`;
  }
}

const coupon = new Coupon(5);
coupon.price;
// 5

coupon.price = '$10';

coupon.price;
// 10

coupon.priceText;
// '$10'
// END:solution
export default Coupon;
