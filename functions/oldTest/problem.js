import { redirect } from './routing';
import { getTaxInformation } from './taxService';

function formatPrice({ price, location }) {
  const user = document.getElementById('user').innerHTML; // <label id="test.dom" />

  if (!location) { // <label id="test.redirect" />
    redirect('/');
    return;
  }

  const rate = getTaxInformation(location); // <label id="test.external" />
  const taxes = rate ? `추가 세금 $${price * rate}` : '추가 세금';

  const totalEl = document.getElementById('total'); // <label id="test.total"/>
  totalEl.innerHTML = `${user}님의 합계 금액: $${price} 및 ${taxes}`;
}

export { formatPrice };
