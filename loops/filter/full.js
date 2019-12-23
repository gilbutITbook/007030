/* eslint-disable no-unused-vars */

// START:team
const team = [
  'Michelle B',
  'Dave L',
  'Dave C',
  'Courtney B',
  'Davina M',
];
// END:team

function getDaveVariants(team) {
// START:filter
  const daves = [];
  for (let i = 0; i < team.length; i++) {
    if (team[i].match(/Da/)) {
      daves.push(team[i]);
    }
  }
  // END:filter
  return daves;
}

// START:instructors
const instructors = [
  {
    name: '짐',
    libraries: ['미디어교육정보 도서관'],
  },
  {
    name: '새라',
    libraries: ['기념 도서관', '문헌정보학 도서관'],
  },
  {
    name: '엘리엇',
    libraries: ['중앙 도서관'],
  },
];
// END:instructors

function findMemorialInstructor(instructors) {
// START:findInstructor
  let memorialInstructor;
  for (let i = 0; i < instructors.length; i++) {
    if (instructors[i].libraries.includes('기념 도서관')) {
      memorialInstructor = instructors[i];
      break;
    }
  }
  // END:findInstructor
  return memorialInstructor;
}

export {
  getDaveVariants,
  findMemorialInstructor,
};
