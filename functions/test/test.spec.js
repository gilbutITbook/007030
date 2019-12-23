import expect from 'expect';

import { formatPrice } from './test';

describe('가격 표시', () => {
  it('세금 정보가 없으면 세금 추가를 안내해야 한다', () => {
    const item = { price: 30, location: 'Oklahoma' };
    const user = 'Aaron Cometbus';
    const message = formatPrice(user, item, () => null);
    expect(message).toEqual('Aaron Cometbus님의 합계 금액: $30 및 추가 세금');
  });

  it('세금 정보가 있으면 세금 금액을 알려줘야 한다', () => {
    const item = { price: 30, location: 'Oklahoma' };
    const user = 'Aaron Cometbus';
    const message = formatPrice(user, item, () => 0.1);
    expect(message).toEqual('Aaron Cometbus님의 합계 금액: $30 및 추가 세금 $3');
  });
});
