const solution = (arr, divisor) => {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      answer.push(arr[i]);
    }
  }
  answer.sort((a, b) => a - b);

  if (answer.length === 0) {
    answer.push(-1);
  }
  return answer;
};

console.log(solution([5, 2, 10, 2, 4, 20], 2));
console.log(solution([3, 6, 9], 10));
