import expect from 'expect';
import {
  applyBreedPreference,
  getSavedBreed,
  removeBreed,
  retrievePreferences,
  saveBreed,
  savePreferences,
} from './local';

describe('localstorage', () => {
  afterEach(() => {
    localStorage.clear();
  });

  it('견종을 설정할 수 있다', () => {
    saveBreed('labrador');
    expect(localStorage.getItem('breed')).toEqual('labrador');
  });

  it('견종을 가져올 수 있다', () => {
    saveBreed('labrador');
    expect(getSavedBreed()).toEqual('labrador');
  });

  it('견종을 제거할 수 있다', () => {
    saveBreed('labrador');
    expect(localStorage.getItem('breed')).toEqual('labrador');
    removeBreed();
    expect(localStorage.getItem('breed')).toEqual(null);
  });

  it('조건을 적용할 수 있다', () => {
    const defaults = new Map();
    saveBreed('labrador');
    const filters = applyBreedPreference(defaults);
    expect(filters.get('breed')).toEqual('labrador');
  });

  it('모든 설정을 저장할 수 있다', () => {
    const filters = new Map()
      .set('color', 'black');
    savePreferences(filters);
    expect(localStorage.getItem('preferences')).toEqual('[["color","black"]]');
  });

  it('모든 설정을 가져올 수 있다', () => {
    localStorage.setItem('preferences', '[["color","black"]]');
    const prefences = retrievePreferences();
    expect(prefences.get('color')).toEqual('black');
  });
});
