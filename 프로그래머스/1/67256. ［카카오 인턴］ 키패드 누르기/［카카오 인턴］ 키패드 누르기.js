function solution(numbers, hand) {
    let answer = '';
    let leftHands = [0, 3];
    let rightHands = [2, 3];

    const keyPad = {
        1: [0, 0], 2: [1, 0], 3: [2, 0],
        4: [0, 1], 5: [1, 1], 6: [2, 1],
        7: [0, 2], 8: [1, 2], 9: [2, 2],
        '*': [0, 3], 0: [1, 3], '#': [2, 3],
    };

    const getDistance = (start, target) => 
        Math.abs(start[0] - target[0]) + Math.abs(start[1] - target[1]);

    numbers.forEach((num) => {
        const target = keyPad[num];

        if ([1, 4, 7].includes(num)) {
            answer += "L";
            leftHands = target;
        } else if ([3, 6, 9].includes(num)) {
            answer += "R";
            rightHands = target;
        } else {
            const L = getDistance(leftHands, target);
            const R = getDistance(rightHands, target);

            if (L < R || (L === R && hand === "left")) {
                answer += "L";
                leftHands = target;
            } else {
                answer += "R";
                rightHands = target;
            }
        }
    });

    return answer;
}
