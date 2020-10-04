const solution = (s) => {
  let answer = false;
  if ((s.length == 4 || s.length == 6) && /^[0-9]+$/.test(s)) {
    answer = true;
  }
  return answer;
};
