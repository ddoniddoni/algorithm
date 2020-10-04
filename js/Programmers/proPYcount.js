const solution = (s) => {
  let a = 0;
  let b = 0;
  let answer = true;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p") {
      a++;
    } else if (s[i] === "P") {
      a++;
    } else if (s[i] === "y") {
      b++;
    } else if (s[i] === "Y") {
      b++;
    }
  }
  if (a === b) {
    answer = true;
  } else {
    answer = false;
  }
};

solution("ppyy");

const solution = (s) => {
  let a =
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
  console.log(a);
  console.log(s.toUpperCase().split("P"));
};

solution("pppppppyyyyy");
