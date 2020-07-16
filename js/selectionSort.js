const selectionSort = (array) => {
  let length = array.length;
  let minIndex, temp, i, j;
  for (i = 0; i < length - 1; i++) {
    minIndex = i;
    console.log(`${i}번째 숫자는`, array[minIndex]);
    for (j = i + 1; j < length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
        console.log("j는", minIndex);
      }
    }
    temp = array[minIndex];
    array[minIndex] = array[i];
    array[i] = temp;
    console.log(array);
  }
  // console.log(array);
};

selectionSort([5, 4, 1, 7, 2, 6, 8, 3]);
