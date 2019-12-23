import expect from 'expect';
import { giveTotal } from './bill';

describe('영수증', () => {
  it('합계 금액을 알려줄 수 있다', () => {
    expect(giveTotal('sara', 10.33333))
      .toEqual('Sara님, 합계는 10.33입니다.');
  });
});
