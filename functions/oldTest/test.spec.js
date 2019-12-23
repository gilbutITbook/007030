import expect from 'expect';

import { applyPrice, formatPrice } from './test';

describe('가격 적용', () => {
  it('스파이를 이용해서 테스트 할 수 있다', () => {
    const domMock = {
      message: '',
      get() { return 'Aaron'; },
      set(id, message) {
        this.message = message;
      },
    };
    applyPrice({ price: 30 }, () => 0.1, domMock);
    expect(domMock.message).toEqual('Aaron님의 합계 금액: $30 및 추가 세금 $3');
  });
});

describe('가격 표시', () => {
  it('세금 정보가 없으면 세금 추가를 안내해야 한다', () => {
    const item = { price: 30, location: 'Oklahoma' };
    const message = formatPrice(item, 'Aaron Cometbus', () => null);
    expect(message).toEqual('Aaron Cometbus님의 합계 금액: $30 및 추가 세금');
  });

  it('세금 정보가 있으면 세금 금액을 알려줘야 한다', () => {
    const item = { price: 30, location: 'Oklahoma' };
    const message = formatPrice(item, 'Aaron Cometbus', () => 0.1);
    expect(message).toEqual('Aaron Cometbus님의 합계 금액: $30 및 추가 세금 $3');
  });
});
