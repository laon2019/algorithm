function solution(s) {
    var answer = [];
    const set = new Set();
    s = s.replace(/{/g, "[").replace(/}/g, "]");
    s =  JSON.parse(s).sort((a, b) => a.length - b.length)
    s.forEach((arr) => {
        arr.forEach((num) => {
            if(!answer.includes(num)){
                answer.push(num);
            }
        })
    })
    return answer;
}