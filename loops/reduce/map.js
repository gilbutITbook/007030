function getAllColors(dogs) {
  // #START:allColors
  const colors = dogs.map(dog => dog['색상']);
  // #END:allColors
  return colors;
}

export { getAllColors };
