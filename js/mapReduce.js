const oneTwoThree = [1, 2, 3, 4, 5, 6, 7];

let result = oneTwoThree.reduce((acc, cur) => {
  acc.push(cur % 2 ? "홀수" : "짝수");
  return acc;
}, []);

console.log(result);
