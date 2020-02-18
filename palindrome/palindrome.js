function palindrome(str) {
  return str.split('').reverse().join('') === str;
}