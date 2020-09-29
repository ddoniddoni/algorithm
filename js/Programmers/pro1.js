const numbers = [2, 1, 3, 4, 1];

const sumArr = [];

for (let i = 0; i < numbers.length - 1; i++) {
  for (let j = i + 1; j < numbers.length; j++) {
    console.log("정답 : ", numbers[i], numbers[j], numbers[i] + numbers[j]);
    sumArr.push(numbers[i] + numbers[j]);
  }
}

console.log(sumArr);

const a = Array.from(new Set(sumArr));
a.sort((a, b) => a - b);
console.log(a);
