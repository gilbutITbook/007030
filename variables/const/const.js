/* eslint-disable no-var, prefer-const */
export function getTotal() {
//  # START:totalConst
  const taxRate = 0.1;

  const total = 100 + (100 * taxRate);

  // 100행의 코드를 건너뛰었습니다.

  return `구매 금액은 ${total}입니다.`;
//  # END:totalConst
}

export function getTotalVar() {
//  # START:totalVar
  var taxRate = 0.1;

  var total = 100 + (100 * taxRate);

  // 100행의 코드를 건너뛰었습니다.

  return `구매 금액은 ${total}입니다.`;
//  # END:totalVar
}

export function getTotalLet() {
//  # START:totalLet
  const taxRate = 0.1;
  const shipping = 5.00;

  let total = 100 + (100 * taxRate) + shipping;

  // 100행의 코드를 건너뛰었습니다.

  return `구매 금액은 ${total}입니다.`;
//  # END:totalLet
}

export function mutableDiscount(cart) {
//  # START:mutate
  const discountable = [];

  // 코드를 몇 행 건너뛰었습니다.

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].discountAvailable) {
      discountable.push(cart[i]);
    }
  }
  //  # END:mutate
  return discountable;
}

export function discountable(cart) {
//  # START:filter
  const discountable = cart.filter(item => item.discountAvailable);
  //  # END:filter
  return discountable;
}
