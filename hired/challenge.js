










// // 10 results 
// const solution = (n) => {
//   const arr = JSON.stringify(n).split('');

//   return arr.reduce((prev, accum, j)=>{
//     let counter = 1;
//     let subString = accum;
//     for(let i = (j+1); i<arr.length; i++){
//       if (subString.indexOf(arr[i]) !== -1 ) {
//         break;
//       }
//       counter++;
//       subString += arr[i];
//     }
//     return (counter > prev) ? counter : prev;
//   }, 0)
// };








const solution = (n) => {
  const arr = JSON.stringify(n).split('');

  return arr.reduce((result, char, j)=>{
    let counter = 1;
    let subString = char;
    for(let i = (j+1); i<arr.length; i++){
      if (subString.indexOf(arr[i]) !== -1 ) {
        counter = (j -)
        return (counter > result) ? counter : result;

        break;
      }
      counter++;
      subString += arr[i];
    }
  }, 0)
};



// console.log(solution(1012345678910));
console.log(solution(9098795672298), 'should be 5');












