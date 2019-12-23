import expect from 'expect';
import { getArtistByPreference, getTheme } from './async';
import { getArtistByPreference as catchPref } from './catch';

describe('async', () => {
  it('동작을 기다릴 수 있다', () => {
    return getTheme()
      .then(theme => {
        expect(theme).toEqual('dusk');
      });
  });

  it('여러 동작을 기다릴 수 있다', () => {
    return getArtistByPreference()
      .then(artist => {
        expect(artist).toEqual('Brian Eno');
      });
  });

  it('오류를 처리할 수 있다', () => {
    return catchPref()
      .then(() => {
        // then으로 넘어오면 오류입니다.
        expect(false).toEqual(true);
      })
      .catch(e => {
        expect(e.type).toEqual('Network error');
      });
  });
});
