function solution(A) {
    const max = Math.max(...A);
    let min = Math.min(...A);
    if(max<0){
        return 1;
    }
    if(min<0){
        min = 1;
    }
    for(let i = min; i < max; i++){
        if(!A.includes(i)){
            return i;
        }
    }
    return max +1;
}


