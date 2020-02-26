function kLargestNumber (pot) {
  const val = itHave(pot[0], 0)
  if(val !== -1){
    return goBottom(pot, {a:0, b: val})
  } else {
    return false;
  }
}

function itHave(arr, number) {
  return arr.reduce((acc, elem, index)=>{
    if(elem === number) {
      return index;
    }
    return acc;
  }, -1)
}

function goBottom(pot, pos){
  if(pos.a === (pot.length-1)){
    return true;
  }
  const nextPos = getNextPos(pot, pos)
  if(nextPos !== -1){
    return goBottom(pot, nextPos);
  } else {
    return false
  }
}

function getNextPos(pot, pos){
  if(pot[pos.a+1][pos.b] !== 1 ){
    return {a : pos.a+1, b: pos.b};
  } else if( ( (pot[pos.a].length) !== pos.b+1 ) && pot[pos.a][pos.b+1] !== 1 ){
    pot[pos.a][pos.b] = 1;
    return {a : pos.a, b: pos.b+1};
  } else if( (pos.b-1>=0) && pot[pos.a][pos.b-1] !== 1 ){
    pot[pos.a][pos.b] = 1;
    return {a : pos.a, b: pos.b-1}; 
  } else {
    return -1
  }

}

