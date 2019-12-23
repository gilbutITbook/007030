import expect from 'expect';

import {
  addFilters,
  clearFilters,
  deleteFilters,
} from './map';

import {
  addFilters as addFiltersObject,
  clearFilters as clearFiltersObject,
  deleteFilters as deleteFiltersObject,
} from './problem';

describe('Map 테스트', () => {
  it('객체에 값을 추가할 수 있다', () => {
    const filters = {
      color: 'brown',
    };
    addFiltersObject(filters, 'size', 'large');
    expect(filters.size).toEqual('large');
  });

  it('객체의 값을 제거할 수 있다', () => {
    const filters = {
      color: 'brown',
      size: 'large',
    };
    deleteFiltersObject(filters, 'color');
    expect(filters).toEqual({ size: 'large' });
  });

  it('객체를 비울 수 있다', () => {
    let filters = {
      color: 'brown',
      size: 'large',
    };
    filters = clearFiltersObject(filters);
    expect(filters).toEqual({});
  });

  it('객체에 값을 추가할 수 있다', () => {
    const filters = new Map().set('color', 'brown');
    addFilters(filters, 'size', 'large');
    expect(filters.get('size')).toEqual('large');
  });

  it('객체의 값을 제거할 수 있다', () => {
    const filters = new Map()
      .set('color', 'brown')
      .set('size', 'large');
    deleteFilters(filters, 'color');
    expect([...filters.keys()]).toEqual(['size']);
  });

  it('객체를 비울 수 있다', () => {
    const filters = new Map()
      .set('color', 'brown')
      .set('size', 'large');
    clearFilters(filters);
    expect([...filters.keys()]).toEqual([]);
  });
});
