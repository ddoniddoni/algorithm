// 짝수-홀수 구하기

const oddEven = (num) => {
  return num % 2 == 0 ? "Even" : "Odd";
};

// 배열 중복값 제거

const deleteArr = (arr) => {
  const resultArray = [];
  if (arr.length > 100000000) {
    return false;
  }
  arr.forEach((a) => {
    if (typeof a === "string" || a != parseInt(a) || a > 9 || a < 0) {
      return false;
    }
    if (resultArray[resultArray.length - 1] != a) {
      [resultArray.push(a)];
    }
  });
  console.log(resultArray);
  return resultArray;
};

deleteArr([4, 4, 4, 3, 3]);
