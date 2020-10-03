const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const solution = (a, b) => {
  let now = new Date(2016, a - 1, b);
  return days[now.getDay()];
};

console.log(solution(7, 23));

let a = new Date(2017, 6, 23);
console.log([a.getDay()]);
