function sortNumber(a, b) {
  return a - b;
}

function kLargestNumber (numbers, k) {
    return numbers.sort(sortNumber).reverse()[k-1];
};