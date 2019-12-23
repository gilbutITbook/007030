import expect from 'expect';
import {
  mergeProgramInformation as mergeProblem,
} from './problem';
import {
  setStrongHallProgram,
} from './program';

import {
  building,
  exhibit,
  manager,
  mergeProgramInformation,
  program,
  zip,
} from './partial';

describe('부분 적용 함수', () => {
  const programInfo = {
    name: 'Presenting Research',
    room: '415',
    hours: '3 - 6',
    address: 'Jayhawk Blvd',
    contact: 'Augusto',
    phone: '555-555-5555',
  };
  const exhibitInfo = {
    name: 'Emerging Scholarship',
    contact: 'Dyan',
    hours: '8 a.m. - 8 p.m.',
    address: 'Jayhawk Blvd',
    phone: '555-555-5555',
  };

  it('프로그램 정보를 결합할 수 있다', () => {
    expect(mergeProblem(building, manager, program)).toEqual(programInfo);
    expect(mergeProblem(building, manager, exhibit)).toEqual(exhibitInfo);
  });

  it('프로그램 정보를 결합할 수 있다', () => {
    expect(mergeProgramInformation(building, manager)(program)).toEqual(programInfo);
    expect(mergeProgramInformation(building, manager)(exhibit)).toEqual(exhibitInfo);
  });

  it('일부 정보를 캡슐화 할 수 있다', () => {
    expect(setStrongHallProgram(program)).toEqual(programInfo);
    expect(setStrongHallProgram(exhibit)).toEqual(exhibitInfo);
  });

  it('정보를 묶을 수 있다', () => {
    const states = ['kansas', 'wisconsin', 'new mexico'];
    const birds = ['meadowlark', 'robin', 'roadrunner'];
    expect(zip(...states)(...birds)).toEqual([
      ['kansas', 'meadowlark'],
      ['wisconsin', 'robin'],
      ['new mexico', 'roadrunner'],
    ]);
  });
});
