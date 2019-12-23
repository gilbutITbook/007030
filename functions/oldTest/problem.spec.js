import expect from 'expect';

import sinon from 'sinon';
import * as routing from './routing';
import * as taxService from './taxService';
import { formatPrice } from './problem';

// START:tests
describe('가격 표시', () => {
  const userElement = {
    innerHTML: 'Aaron Cometbus',
  };

  const totalElement = {
    innerHTML: '',
  };

  const document = { // <label id="test.document" />
    getElementById: id => {
      if (id === 'user') {
        return userElement;
      }
      if (id === 'total') {
        return totalElement;
      }
      return null;
    },
  };

  global.document = document;

  let taxStub;

  beforeEach(() => {
    taxStub = sinon.stub(taxService, 'getTaxInformation'); // <label id="test.stub" />
  });

  afterEach(() => {
    totalElement.innerHTML = ''; // <label id="test.reset" />
    taxStub.restore();
  });

  it('location이 없으면 리다이렉트 해야 한다', () => {
    sinon.spy(routing, 'redirect'); // <label id="test.spy" />
    formatPrice({}, undefined);
    expect(routing.redirect.called).toEqual(true);
  });

  it('세금 정보가 없으면 세금 추가를 안내해야 한다', () => {
    taxStub.returns(null); // <label id="test.stub2" />
    formatPrice({ price: 30, location: 'Oklahoma' });
    const message = 'Aaron Cometbus님의 합계 금액: $30 및 추가 세금';
    expect(totalElement.innerHTML).toEqual(message);
  });

  it('세금 정보가 있으면 세금 금액을 알려줘야 한다', () => {
    taxStub.returns(0.1);
    formatPrice({ price: 30, location: 'Oklahoma' });
    const message = 'Aaron Cometbus님의 합계 금액: $30 및 추가 세금 $3';
    expect(totalElement.innerHTML).toEqual(message);
  });
  // END:tests
});
