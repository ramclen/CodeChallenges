function climbingLeaderboard(scores, alice) {
  const results = [];
  scores = [...new Set(scores)];
  for (var i = 0; i < alice.length; i++) {
    results.push(bubbleSearch(scores, alice[i]) + 1)
  }
  return results;
}

function bubbleSearch(array, toSearch) {
  let left = 0;
  let right = array.length - 1;
  let pos;
  while (right >= left) {
    pos = Math.floor((left + right) / 2);
    if (array[pos] > toSearch) {
      left = pos + 1;
    } else if (array[pos] < toSearch) {
      right = pos - 1;
    } else {
      return pos;
    }
  }
  
  if (array.length - 1 === pos) {
    array.push(toSearch);
    pos = array.length - 1;
    return pos;
  } else {
    if (left !== pos) {
      pos++
    }
    if ((array.length%2)!==0){
        if(right === pos) {
            pos--
        }
    }
    array.splice(pos, 0, toSearch);
    return pos
  }
}