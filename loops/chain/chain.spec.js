import expect from 'expect';
import sinon from 'sinon';

import { sailors, sendActiveMemberEmail } from './chain';
import { sendActiveMemberEmail as sendActiveMemberEmailFull } from './full';

describe('체이닝', () => {
  it('활성 사용자에게만 메일을 보낼 수 있다', () => {
    const sendInvitationSpy = sinon.spy();

    sendActiveMemberEmailFull(sailors, sendInvitationSpy);
    expect(sendInvitationSpy.calledTwice).toEqual(true);
  });

  it('활성 사용자에게만 메일을 보낼 수 있다', () => {
    const sendInvitationSpy = sinon.spy();

    sendActiveMemberEmail(sailors, sendInvitationSpy);
    expect(sendInvitationSpy.calledTwice).toEqual(true);
  });

  it('이메일 주소를 정규화 할 수 있다', () => {
    const sendInvitationSpy = sinon.spy();

    sendActiveMemberEmail(sailors, sendInvitationSpy);
    expect(sendInvitationSpy.getCall(0).args[0]).toEqual('yh@yhproductions.io');
    expect(sendInvitationSpy.getCall(1).args[0]).toEqual('alex@wiscsail.io');
  });
});
