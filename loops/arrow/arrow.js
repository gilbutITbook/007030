//  #START:key
const key = () => {
  return 'abc123';
};
//  #END:key

//  #START:capitalize
const capitalize = name => {
  return name[0].toUpperCase() + name.slice(1);
};
//  #END:capitalize

//  #START:greet
const greet = (first, last) => {
  return `안녕하세요, ${capitalize(first)} ${capitalize(last)}님`;
};
//  #END:greet

//  #START:formatUser
const formatUser = name => `${capitalize(name)}님이 로그인했습니다.`;
//  #END:formatUser

function applyCustomGreeting(name, callback) {
  return callback(capitalize(name));
}

function greetWithExcitement() {
  const greeting =
    //  #START:greetWithExcitement
    applyCustomGreeting('joe', name => `안녕, ${name}!`);
  //  #END:greetWithExcitement
  return greeting;
}

export { key, capitalize, greet, formatUser, greetWithExcitement };
