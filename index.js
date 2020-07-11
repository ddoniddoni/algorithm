const insertionSort = (array) => {
  let i = 1,
    j,
    temp;
  for (i; i < array.length; i++) {
    temp = array[i]; // 새로운 숫자 선택
    for (j = i - 1; j >= 0 && temp < array[j]; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = temp;
  }
  console.log(array);
};

insertionSort([10, 25, 11, 2, 6, 76]);
