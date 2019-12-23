import expect from 'expect';
import {
  alphabetizeTeam,
  dogPair,
  getMusicians,
  getName,
  getTotalStats,
  staff,
  team,
} from './arrays';

describe('배열 동작', () => {
  it('팀을 알파벳 순으로 정렬할 수 있다', () => {
    expect(alphabetizeTeam(team)).toEqual([
      'Bea',
      'Dyan',
      'Joe',
      'Theo',
    ]);
  });

  it('musician만 가져올 수 있다', () => {
    expect(getMusicians(staff)).toEqual([
      {
        name: 'Wesley',
        position: 'musician',
      },
    ]);
  });

  it('이름을 가져올 수 있다', () => {
    expect(getName(dogPair)).toEqual('Don');
  });

  it('타율을 계산할 수 있다', () => {
    expect(getTotalStats()).toEqual({
      hits: 5,
      runs: 1,
      errors: 1,
    });
  });
});
