import expect from 'expect';
import { staff, sortByYears, sortByName } from './sort';

describe('정렬 조작', () => {
  it('다른 결과를 반환해야 한다', () => {
    const copy = [...staff];
    copy.sort(sortByYears);
    expect(copy[0].name).toEqual('Theo');
    expect(copy[1].name).toEqual('Joe');
    expect(copy[2].name).toEqual('Dyan');

    copy.sort(sortByName);
    expect(copy[0].name).toEqual('Dyan');
    expect(copy[1].name).toEqual('Joe');
    expect(copy[2].name).toEqual('Theo');

    copy.sort(sortByYears);
    expect(copy[0].name).toEqual('Theo');
    expect(copy[1].name).toEqual('Dyan');
    expect(copy[2].name).toEqual('Joe');
  });

  it('동일한 결과를 반환해야 한다', () => {
    const staff1 = [...staff].sort(sortByYears);
    expect(staff1[0].name).toEqual('Theo');
    expect(staff1[1].name).toEqual('Joe');
    expect(staff1[2].name).toEqual('Dyan');

    const staff2 = [...staff].sort(sortByName);
    expect(staff2[0].name).toEqual('Dyan');
    expect(staff2[1].name).toEqual('Joe');
    expect(staff2[2].name).toEqual('Theo');

    const staff3 = [...staff].sort(sortByYears);
    expect(staff3[0].name).toEqual('Theo');
    expect(staff3[1].name).toEqual('Joe');
    expect(staff3[2].name).toEqual('Dyan');
  });
});
