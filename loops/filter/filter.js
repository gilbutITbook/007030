/* eslint-disable no-unused-vars */

const team = [
  'Michelle B',
  'Dave L',
  'Dave C',
  'Courtney B',
  'Davina M',
];

function getDaveVariants(team) {
// START:filter
  const daves = team.filter(member => member.match(/Da/));
  // END:filter
  return daves;
}

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

function findMemorialInstructor(instructors) {
// START:findInstructor
  const librarian = instructors.find(instructor => {
    return instructor.libraries.includes('기념 도서관');
  });
  // END:findInstructor

  return librarian;
}

function findAnyInstructor(instructors) {
// START:findInstructorCurry
  const findByLibrary = library => instructor => {
    return instructor.libraries.includes(library);
  };
  const librarian = instructors.find(findByLibrary('미디어교육정보 도서관'));

  // {
  //   name: 'Jim',
  //   libraries: ['미디어교육정보 도서관'],
  // }
  // END:findInstructorCurry

  return librarian;
}

// START:score
const scores = [30, 82, 70, 45];
function getNumberOfPassingScores(scores) {
  const passing = scores.filter(score => score > 59);
  // [70, 82]
  return passing.length;
}
// 2

// END:score

// START:perfect
function getPerfectScores(scores) {
  const perfect = scores.filter(score => score === 100);
  // []
  return perfect.length;
}
// 0

// END:perfect

export {
  scores,
  getDaveVariants,
  findAnyInstructor,
  findMemorialInstructor,
  getNumberOfPassingScores,
  getPerfectScores,
  instructors,
  team,
};
