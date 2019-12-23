// START: next
function* getCairoTrilogy() {
  yield '궁전 샛길';
  yield '욕망의 궁전';
  yield '설탕 거리';
}

const trilogy = getCairoTrilogy();
trilogy.next();
// { value: '궁전 샛길', done: false }
trilogy.next();
// { value: '욕망의 궁전', done: false }
trilogy.next();
// { value: '설탕 거리', done: false }
trilogy.next();
// { value: undefined, done: true }
// END: next

// START: spread
[...getCairoTrilogy()];
// [ '궁전 샛길', '욕망의 궁전', '설탕 거리']
// END: spread

// START: loop
const readingList = {
  '깡패단의 방문': true,
  '맨해튼 비치': false,
};
for (const book of getCairoTrilogy()) {
  readingList[book] = false;
}
readingList;
// {
//   '깡패단의 방문': true,
//   '맨해튼 비치': false,
//   '궁전 샛길': false,
//   '욕망의 궁전': false,
//   '설탕 거리': false
// }

// END: loop

export { getCairoTrilogy };
