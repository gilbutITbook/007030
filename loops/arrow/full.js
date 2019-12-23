/* eslint-disable no-unused-vars, func-names, prefer-arrow-callback */

//  #START:key
function key() {
  return 'abc123';
}
//  #END:key

//  #START:capitalize
function capitalize(name) {
  return name[0].toUpperCase() + name.slice(1);
}
//  #END:capitalize

//  #START:greet
function greet(first, last) {
  return `안녕하세요, ${capitalize(first)} ${capitalize(last)}님`;
}
//  #END:greet

//  #START:formatUser
function formatUser(name) {
  return `${capitalize(name)}님이 로그인했습니다.`;
}
//  #END:formatUser

//  #START:applyCustomGreeting
function applyCustomGreeting(name, callback) {
  return callback(capitalize(name));
}
//  #END:applyCustomGreeting

function greetWithExcitement() {
  const greeting =
    //  #START:greetWithExcitement
    applyCustomGreeting('joe', function (name) {
      return `안녕, ${name}!`;
    });
  //  #END:greetWithExcitement
  return greeting;
}

export {
  applyCustomGreeting,
  capitalize,
  formatUser,
  greet,
  greetWithExcitement,
  key,
};
