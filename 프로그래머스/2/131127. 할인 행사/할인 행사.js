function solution(want, number, discount) {
    var answer = 0;
    const length = number.reduce((a, b) => a + b);

    for (let i = 0; i <= discount.length - length; i++) {
        const map = new Map();

        want.forEach((item, index) => {
            map.set(item, number[index]);
        });

        for (let j = 0; j < length; j++) {
            const currentItem = discount[i + j];

            if (map.has(currentItem) && map.get(currentItem) > 0) {
                map.set(currentItem, map.get(currentItem) - 1);
            } else {
                break;
            }
        }
        if (Array.from(map.values()).every(val => val === 0)) {
            answer++;
        }
    }

    return answer;
}