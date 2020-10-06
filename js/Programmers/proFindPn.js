const solution = (n) => {
  let answer = 0;
  let arr = [];

  for (let i = 2; i <= n; i++) {
    arr.push(i);
  }

  for (let i = 2; i <= n; i++) {
    if (arr[i] === 0) continue;

    for (let j = i + i; j <= n; j += i) {
      arr[j] = 0;
    }
  }

  for (let i = 2; i <= n; i++) {
    if (arr[i] !== 0) answer++;
  }

  console.log(answer);
};

console.log(solution(10));
