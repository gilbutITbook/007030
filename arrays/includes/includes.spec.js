import expect from 'expect';
import {
  displayShipping,
} from './includes';

import {
  displayShipping as displayShippingIndex,
} from './greater';

describe('includes 동작', () => {
  it('색인을 이용해서 shipping이 있는지 알 수 있다', () => {
    const sections = ['shipping', 'address'];
    expect(displayShippingIndex(sections)).toEqual(true);
  });

  it('색인을 이용해서 shipping이 없는지 알 수 있다', () => {
    const sections = ['contact', 'address'];
    expect(displayShippingIndex(sections)).toEqual(false);
  });

  it('shipping 있는지 알 수 있다 ', () => {
    const sections = ['shipping', 'address'];
    expect(displayShipping(sections)).toEqual(true);
  });

  it('shipping 없는지 알 수 있다', () => {
    const sections = ['contact', 'address'];
    expect(displayShipping(sections)).toEqual(false);
  });
});
