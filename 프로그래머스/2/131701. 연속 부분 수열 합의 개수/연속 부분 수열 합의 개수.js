function solution(elements) {
  const set = new Set();
    const arr = [...elements, ...elements];
    for(let i = 1;i <= elements.length;i++){
        for(let j = 0;j < elements.length;j++){
            let sum = 0;
            for(let k = j;k< j+i;k++){
                sum += arr[k];
            }
            set.add(sum);
        }
    }
    return set.size;
}
