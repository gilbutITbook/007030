import expect from 'expect';
import { getCairoTrilogy } from './simple';
import FamilyTree from './generators';
import FamilyTreeProblem from './problem';

describe('카이로 3부작', () => {
  it('카이로 3부작을 한 권씩 반환할 수 있다', () => {
    const trilogy = getCairoTrilogy();
    expect(trilogy.next().value).toEqual('궁전 샛길');
    expect(trilogy.next().value).toEqual('욕망의 궁전');
    expect(trilogy.next().value).toEqual('설탕 거리');
    expect(trilogy.next().done).toEqual(true);
  });

  it('카이로 3부작을 배열에 펼쳐 넣는다', () => {
    const trilogy = [...getCairoTrilogy()];
    expect(trilogy).toEqual([
      '궁전 샛길',
      '욕망의 궁전',
      '설탕 거리',
    ]);
  });

  it('책을 독서 목록에 추가한다', () => {
    const readingList = {
      '깡패단의 방문': true,
      '맨해튼 비치': false,
    };
    for (const book of getCairoTrilogy()) {
      readingList[book] = false;
    }
    expect(readingList).toEqual({
      '깡패단의 방문': true,
      '맨해튼 비치': false,
      '궁전 샛길': false,
      '욕망의 궁전': false,
      '설탕 거리': false,
    });
  });
});
describe('가족 구성원이 담긴 배열을 만들 수 있다', () => {
  it('메서드로 가족 목록을 가져올 수 있다', () => {
    const family = new FamilyTreeProblem();
    expect(family.getMembers()).toEqual(['Doris', 'Martha', 'Dyan', 'Bea']);
  });
  it('가족 목록을 가져올 수 있다', () => {
    const family = new FamilyTree();
    expect([...family]).toEqual(['Doris', 'Martha', 'Dyan', 'Bea']);
  });
});
