import expect from 'expect';

import {
  configureTimePermissions as configureLet,
  configureTimePermissionsScope as configureLetScope,
} from './if';
import { configureTimePermissions as configureProblem } from './ternaryProblem';

describe('삼항 연산자 ', () => {
  it('if와 let으로 허용 대상(permissions)에 근로시간을 설정할 수 없다', () => {
    let RefError;
    try {
      configureLet({ title: '과장' });
    } catch (error) {
      RefError = error instanceof ReferenceError;
    }
    expect(RefError).toEqual(true);
  });

  it('if와 let으로 허용 대상(permissions)에 근로시간을 설정할 수 있다', () => {
    expect(configureLetScope({ title: '과장' })).toEqual(['근로시간', '수당']);
  });

  it('과장, 부장, 사원을 삼항 연산자로 설정할 수 있다', () => {
    expect(configureProblem({ title: '과장' })).toEqual(['근로시간', '초과근무승인', '수당']);
    expect(configureProblem({ title: '부장' })).toEqual(['근로시간', '초과근무승인']);
    expect(configureProblem({ title: '사원' })).toEqual(['근로시간']);
  });
});
