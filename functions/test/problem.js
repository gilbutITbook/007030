import { getTaxInformation } from './taxService';

function formatPrice(user, { price, location }) {
  const rate = getTaxInformation(location); // <label id="test.external" />
  const taxes = rate ? `추가 세금 $${price * rate}` : '추가 세금';

  return `${user}님의 합계 금액: $${price} 및 ${taxes}`;
}

export { formatPrice };
