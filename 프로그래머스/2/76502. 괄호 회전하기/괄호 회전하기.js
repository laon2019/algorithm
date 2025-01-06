function solution(s) {
    let answer = 0;
    const punctuations = ["{", "}", "[", "]", "(", ")"];

    s = s.split("");
    const arr = [...s, ...s];

    for (let i = 0; i < s.length; i++) {
        if (arr[i] === "}" || arr[i] === "]" || arr[i] === ")") {
            continue;
        }

        const queue = [];

        for (let j = i; j < s.length + i; j++) {
            const current = arr[j];

            if (
                (current === "}" && queue[queue.length - 1] === "{") ||
                (current === "]" && queue[queue.length - 1] === "[") ||
                (current === ")" && queue[queue.length - 1] === "(")
            ) {
                queue.pop();
            } else if (punctuations.includes(current)) {
                queue.push(current);
            }
        }

        if (queue.length === 0) {
            answer++;
        }
    }

    return answer;
}