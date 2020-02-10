function diagonalDifference(arr) {
  const matrix = arr.slice(0, arr.length);
  let diagonal = 0;
  let inverse = 0;
  for (let i = 0; i < matrix.length; i++){
      diagonal += matrix[i][i];
      inverse += matrix[i][matrix.length - i - 1];
  }
  return Math.abs(diagonal - inverse);
}
