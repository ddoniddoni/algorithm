function solution(arr) {
  return console.log(arr.filter((val, index) => val != arr[index + 1]));
}

solution([1, 2, 3, 3, 4, 4, 5, 5, 1, 1, 2, 2, 3]);
