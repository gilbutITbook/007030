import expect from 'expect';
import { failMusic, failUserPreference, getArtist, getMusic, getUserPreferences } from './promises';
import {
  getUserPreferences as prefProblem,
} from './problem';

describe('프러미스', () => {
  it('데이터를 가져와야 한다', done => {
    return prefProblem(data => {
      expect(data.theme.toUpperCase()).toEqual('DUSK');
      done();
    });
  });

  it('데이터를 가져와야 한다', () => {
    return getUserPreferences().then(data => {
      expect(data.theme).toEqual('dusk');
    });
  });
  it('실패해야 한다', () => {
    return failUserPreference()
      .catch(data => {
        expect(data.type).toEqual('Access Denied');
      });
  });
  it('then으로 연결할 수 있다', () => {
    return getUserPreferences()
      .then(preference => {
        return getMusic(preference.theme);
      })
      .then(music => {
        expect(music.album).toEqual('music for airports');
      });
  });

  it('오류를 처리할 수 있다', () => {
    return getUserPreferences()
      .then(preference => failMusic(preference.theme))
      .then(music => getArtist(music.album))
      .catch(e => {
        expect(e.type).toEqual('Network error');
      });
  });
});
