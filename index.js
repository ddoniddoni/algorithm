const partition = (array, left, right, pivotIndex) => {
  let temp;
  let pivot = array[pivotIndex];
  while (left <= right) {
    while (array[left] < pivot) left++;
    while (array[right] < pivot) right--;
    if (left <= right) {
      temp = array[left];
      array[left] = array[right];
      array[right] = temp;
      left++;
      right--;
    }
  }
  temp = array[left];
  array[left] = array[pivotIndex];
  array[pivotIndex] = temp;
  return left;
};

const quickSort = (array, left, right) => {
  if (!left) left = 0;
  if (!right) right = array.length - 1;
  let pivotIndex = right;
  pivotIndex = partition(array, left, right - 1, pivotIndex);
  if (left < pivotIndex - 1) quickSort(array, left, pivotIndex - 1);
  if (pivotIndex + 1 < right) quickSort(array, pivotIndex + 1, right);
  console.log(array);
};

quickSort([4, 1, 7, 6, 3, 8, 2, 5]);
