function solution(cacheSize, cities) {
    var answer = 0;
    let queue = [];
    cities = cities.map(city => city.toLowerCase());
    if(cacheSize === 0) return cities.length * 5;
    cities.forEach((city) => {
        if(queue.includes(city)) {
            queue.splice(queue.indexOf(city), 1);
            queue.push(city.toLowerCase());
            answer++;
        } else {
            if(queue.length === cacheSize) {
               queue.shift();
            }
            queue.push(city);
            answer += 5;
        }
    })
    return answer;
}