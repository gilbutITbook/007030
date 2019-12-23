
// START:final
function formatPrice({ price, location }, user, getTaxInformation) {
  const rate = getTaxInformation(location);
  const taxes = rate ? `추가 세금 $${price * rate}` : '추가 세금';
  return `${user}님의 합계 금액: $${price} 및 ${taxes}`;
}
// END:final

// START:remove
function applyPrice(item, getTaxInformation, domService) {
  const user = domService.get('user');
  const message = formatPrice(item, user, getTaxInformation);
  return domService.set('total', message);
}
// END:remove

export { applyPrice, formatPrice };
