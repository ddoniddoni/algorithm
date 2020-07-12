const buubleSort = (array) => {
  let length = array.length;
  let i, j, temp;
  for (i = 0; i < length - 1; i++) {
    for (j = 0; j < length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return console.log(array);
};

buubleSort([5, 1, 7, 4, 6, 3, 2, 8]);
