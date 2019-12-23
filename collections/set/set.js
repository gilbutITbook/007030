// #START:unique
function getUnique(attributes) {
  return [...new Set(attributes)];
}
// #END:unique

// #START:uniqueColors
function getUniqueColors(dogs) {
  const unique = new Set();
  for (const dog of dogs) {
    unique.add(dog.색상);
  }
  return [...unique];
}
// #END:uniqueColors

function getUniqueColorsReduce(dogs) {
  const colors =
// #START:uniqueReduce
[...dogs.reduce((colors, { 색상 }) => colors.add(색상), new Set())];
  // #END:uniqueReduce
  return colors;
}

export { getUnique, getUniqueColors, getUniqueColorsReduce };
