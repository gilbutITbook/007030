import expect from 'expect';

import { getLowestPrice } from './let';
import { getLowestPrice as getLowestPriceVar } from './problem';
import { getLowestPrice as getLowestPriceConst } from './const';

describe('var로 작성한 최저가', () => {
  it('재고가 없으면 0을 반환해야 한다', () => {
    //    # START:noInventory
    const item = {
      inventory: 0,
      price: 3,
      salePrice: 0,
      saleInventory: 0,
    };
    //    # END:noInventory

    expect(getLowestPriceVar(item)).toEqual(0);
  });

  it('할인 가격을 반환해야 한다', () => {
    //    # START:salePrice
    const item = {
      inventory: 3,
      price: 3,
      salePrice: 2,
      saleInventory: 1,
    };
    //    # END:salePrice
    expect(getLowestPriceVar(item)).toEqual(2);
  });

  it('잘못된 재고를 반환해야 한다', () => {
    //    # START:noSale
    const item = {
      inventory: 3,
      price: 3,
      salePrice: 2,
      saleInventory: 0,
    };
    //    # END:noSale
    expect(getLowestPriceVar(item)).toEqual(0);
  });
});

describe('let으로 작성한 최저가', () => {
  it('재고가 없으면 0을 반환해야 한다', () => {
    const item = {
      inventory: 0,
      price: 3,
      salePrice: 0,
      saleInventory: 0,
    };

    expect(getLowestPrice(item)).toEqual(0);
  });

  it('할인 가격을 반환해야 한다', () => {
    const item = {
      inventory: 3,
      price: 3,
      salePrice: 2,
      saleInventory: 1,
    };
    expect(getLowestPrice(item)).toEqual(2);
  });

  it('잘못된 재고를 반환해야 한다', () => {
    const item = {
      inventory: 3,
      price: 3,
      salePrice: 2,
      saleInventory: 0,
    };
    expect(getLowestPrice(item)).toEqual(3);
  });
});

describe('const로 작성한 최저가', () => {
  it('재고가 없으면 0을 반환해야 한다', () => {
    const item = {
      inventory: 0,
      price: 3,
      salePrice: 0,
      saleInventory: 0,
    };

    expect(getLowestPriceConst(item)).toEqual(0);
  });

  it('할인 가격을 반환해야 한다', () => {
    const item = {
      inventory: 3,
      price: 3,
      salePrice: 2,
      saleInventory: 1,
    };
    expect(getLowestPriceConst(item)).toEqual(2);
  });

  it('잘못된 재고를 반환해야 한다', () => {
    const item = {
      inventory: 3,
      price: 3,
      salePrice: 2,
      saleInventory: 0,
    };
    expect(getLowestPriceConst(item)).toEqual(3);
  });
});
