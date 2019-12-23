// START:greet
function greet(name) {
  return `Hi, ${name}`;
}
greet('Leo');
'Hi, Leo';
// END:greet

// START:yell
function yell(name) {
  return `HI, ${name.toUpperCase()}!`;
}
greet('Pankaj');
'HI, PANKAJ!';
// END:yell

// START:convert
function leapYearConverter(age) {
  return `윤년에 태어났다면 ${Math.floor(age / 4)}살이야.`;
}
leapYearConverter(34);
// "윤년에 태어났다면 8살이야."
// END:convert

function getProvider() {
  // stub for get provider
  return 'pragprog.com/cloud';
}

// START:func
function generateLink(image, width) {
  return `https://${getProvider()}/${image}?width=${parseInt(width, 10)}`;
}
// END:func

export { generateLink, greet, leapYearConverter, yell };
