function compareTriplets(a, b) {
  const result = [0, 0];
  for (let i = 0; i < a.length; i++) {
    if (a[i] != b[i]) {
      if (a[i] < b[i]) {
        result[1]++;
      } else {
        result[0]++;
      }
    }
  }
  return result;
}