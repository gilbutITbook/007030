import expect from 'expect';
import {
  getDaveVariants,
  findMemorialInstructor,
  findAnyInstructor,
  getNumberOfPassingScores,
  getPerfectScores,
  instructors,
  scores,
  team,
} from './filter';
import {
  getDaveVariants as getDaveVariantsFull,
  findMemorialInstructor as findMemorialInstructorFull,
} from './full';

describe('필터링', () => {
  it('이름이 Dave인 사람이 몇 명인지 알 수 있다', () => {
    expect(getDaveVariants(team).length).toEqual(3);
  });

  it('사서 한 명을 찾을 수 있다', () => {
    expect(findMemorialInstructor(instructors).name).toEqual('새라');
  });

  it('for 문을 이용해서 이름이 Dave인 사람이 몇 명인지 알 수 있다', () => {
    expect(getDaveVariantsFull(team).length).toEqual(3);
  });

  it('for 문을 이용해서 사서 한 명을 찾을 수 있다', () => {
    expect(findMemorialInstructorFull(instructors).name).toEqual('새라');
  });

  it('기준 점수를 통과한 경우가 몇 개인지 알 수 있다', () => {
    expect(getNumberOfPassingScores(scores)).toEqual(2);
  });

  it('만점이 몇 개인지 알 수 있다', () => {
    expect(getPerfectScores(scores)).toEqual(0);
  });

  it('커링 함수로 사서를 찾을 수 있다', () => {
    expect(findAnyInstructor(instructors).name).toEqual('짐');
  });
});
