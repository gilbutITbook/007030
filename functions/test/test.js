
// START:final
function formatPrice(user, { price, location }, getTaxInformation) {
  const rate = getTaxInformation(location);
  const taxes = rate ? `추가 세금 $${price * rate}` : '추가 세금';
  return `${user}님의 합계 금액: $${price} 및 ${taxes}`;
}
// END:final

export { formatPrice };
