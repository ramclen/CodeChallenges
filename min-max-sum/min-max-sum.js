function miniMaxSum(arr) {
  arr = arr.sort((a,b)=>a-b)
  const max = sum([1, arr.length-1], arr)
  const min = sum([0, arr.length-2], arr)
  console.log(min + ' ' + max)
}