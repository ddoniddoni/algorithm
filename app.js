const solution = (s) => {
  let a =
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
  console.log(a);
  console.log(s.toUpperCase().split("P"));
};

solution("pppppppyyyyy");
