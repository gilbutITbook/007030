import expect from 'expect';
import sinon from 'sinon';

import { sendInvitation as sendInvitationFull } from './full';
import { mutateChange, noChange, sailingClub, sendInvitation } from './forEach';

describe('forEach', () => {
  it('for 문을 이용해서 각 회원에게 이메일을 보낼 수 있다', () => {
    const sendInvitationSpy = sinon.spy();
    sendInvitationFull(sailingClub, sendInvitationSpy);
    expect(sendInvitationSpy.getCalls().length).toEqual(6);
  });

  it('각 회원에게 이메일을 보낼 수 있다', () => {
    const sendInvitationSpy = sinon.spy();
    sendInvitation(sailingClub, sendInvitationSpy);
    expect(sendInvitationSpy.getCalls().length).toEqual(6);
  });

  it('forEach로 변경되지 않아야 한다', () => {
    expect(noChange()).toEqual(undefined);
  });

  it('forEach로 변경되어야 한다', () => {
    expect(mutateChange()).toEqual(['WALTER', 'WHITE']);
  });
});
