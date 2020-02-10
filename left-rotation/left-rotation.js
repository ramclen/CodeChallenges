function rotLeft(array, rotations) {
  return array.slice(rotations, array.length).concat(array.slice(0, rotations));
}