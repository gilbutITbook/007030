/* eslint-disable no-unused-vars */

// #START:band
const band = [
  {
    name: '코벳',
    instrument: '기타',
  },
  {
    name: '에반',
    instrument: '기타',
  },
  {
    name: '션',
    instrument: '베이스',
  },
  {
    name: '브렛',
    instrument: '드럼',
  },
];
// #END:band


function getInstruments() {
  // START:getInstruments
  function getInstrument(member) {
    return member.instrument;
  }

  const instruments = band.map(getInstrument);
  // ['기타', '기타', '베이스', '드럼']
  // END:getInstruments
  return instruments;
}

function getInstruments2() {
  // START:getInstruments2

  const instruments = band.map(member => member.instrument);
  // ['기타', '기타', '베이스', '드럼']
  // END:getInstruments2
  return instruments;
}

function getDogs(env) {
  return () => {
    if (env === 'production') {
      return fetch('http://dog.foo');
    }
    return fetch('http://localhost:8888');
  };
}

function getCats(env) {
  return () => {
    if (env === 'production') {
      return fetch('http://dog.foo');
    }
    return fetch('http://localhost:8888');
  };
}

function setUpLocal(...fetchers) {
  return fetchers.map(fetcher => fetcher('local'));
}

export { getInstruments, getInstruments2 };
