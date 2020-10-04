const solution = (s) => {
  let answer = s.split("").sort().reverse().join("");
  console.log(answer);
};

solution("Zbcdefg");
