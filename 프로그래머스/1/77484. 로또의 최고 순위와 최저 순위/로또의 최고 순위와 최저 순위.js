function solution(lottos, win_nums) {
    var answer = [];
    let max = 0;
    let min = 0;
    
    lottos.forEach((lottoNum, i) => {
        if (lottoNum === 0) {
            max++;
        } else if (win_nums.some(winNum => winNum === lottoNum)) {
            min++;
            max++;
        }
    });

    const matchingRank = (num) => {
    if(num === 6) return 1;
    if(num === 5) return 2;
    if(num === 4) return 3;
    if(num === 3) return 4;
    if(num === 2) return 5;
    return 6;
    }
    answer[0] = matchingRank(max);
    answer[1] = matchingRank(min);
    
    return answer;
} 

