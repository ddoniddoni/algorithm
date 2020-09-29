function solution(answers) {
  let answer = [];

  let one = [1, 2, 3, 4, 5];
  let two = [2, 1, 2, 3, 2, 4, 2, 5];
  let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let countArr = [0, 0, 0];

  // 찍는 방식이 반복되는 점을 이용하여 점수를 구한다.
  let size = answers.length;
  for (let i = 0; i < size; i++) {
    if (answers[i] === one[i % 5]) countArr[0]++;

    if (answers[i] === two[i % 8]) countArr[1]++;

    if (answers[i] === three[i % 10]) countArr[2]++;
  }

  // 최고 점수를 받은 사람만 찾으면 되기 때문에 reduce를 사용하여 max 값을 찾는다.
  let max = countArr.reduce((a, b) => {
    return Math.max(a, b);
  });

  console.log("ㅇㅇ", countArr);

  // max값이 여러명 존재할 수 있기 때문에 1번부터 순차적으로 모두 검사한다.
  if (max === countArr[0]) answer.push(1);
  if (max === countArr[1]) answer.push(2);
  if (max === countArr[2]) answer.push(3);

  return answer;
}

console.log(solution([1, 2, 3, 4, 5])); // [1]
console.log(solution([1, 3, 2, 4, 2])); // [1, 2, 3]
console.log(solution([3, 3, 1, 1, 5])); // [3]
console.log(solution([1, 3, 2, 4, 2, 5, 5, 3, 1])); // [1]
