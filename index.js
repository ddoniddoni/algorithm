//ES2015 string에 새로운 메서드

// let str = "hello world! ^^ ~~~~";
// let matchStr = "hello";

// console.log(str.startsWith(matchStr));
// console.log(str.endsWith(matchStr));
// console.log("include test", str.includes("^^"));

//for of

// 문자열 or 배열 등을 순회해서 출력할 수 있음
// for (let value of str) {
//   console.log(value);
// }

//spread operatior, 펼침 연산자

// const sum = (a, b, c) => {
//   return a + b + c;
// };

// const list = [100, 200, 300];
// console.log(sum(...list));

// ES2015 from Method

// function addMark() {
//   let newArray = Array.from(arguments);
//   let newData = newArray.map((value) => {
//     return value + "!";
//   });
//   console.log(newData);
// }
// addMark(1, 2, 3, 4, 5, 6, 7);

const name = "ddoni";
const age = 29;

const obj = {
  name,
  age,
};

console.log(obj);
