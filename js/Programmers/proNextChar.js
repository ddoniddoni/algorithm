const solution = (s, n) => {
  let answer = "";
  let strArr = s.split("");

  let arrUp = [];
  let arrDown = [];

  for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
    arrDown.push(String.fromCharCode(i));
  }
  for (let i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); i++) {
    arrUp.push(String.fromCharCode(i));
  }

  console.log(arrDown, arrUp);

  strArr.map((e, i) => {
    if (arrDown.includes(e)) {
      let index = arrDown.indexOf(e);
      answer += arrDown[(index + n) % 26];
      console.log(arrDown[(index + n) % 26]);
    }
    if (arrUp.includes(e)) {
      let index = arrUp.indexOf(e);
      answer += arrUp[(index + n) % 26];
      console.log(answer);
    }
    if (e === " ") {
      answer += " ";
    }
  });
  return answer;
};

solution("AB DF gs", 2);
