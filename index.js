const num__input = document.querySelector(".num__input");
const selection__btn = document.querySelector(".selection__btn");
let num__view = document.querySelector(".num__view");
let numArray = [];

// const onClick = () => {
//   numArray = num__input.value.split(" ");
//   for (let i = 0; i < numArray.length; i++) {
//     console.log(numArray[i]);
//   }
// };

const selectionSort = () => {
  numArray = num__input.value.split(" ");
  let length = numArray.length;
  let minIndex, temp, i, j;
  for (i = 0; i < length - 1; i++) {
    minIndex = i;
    console.log(`${i}번째 숫자는`, numArray[minIndex]);
    for (j = i + 1; j < length; j++) {
      if (numArray[j] < numArray[minIndex]) {
        minIndex = j;
        console.log("j는", minIndex);
      }
    }
    temp = numArray[minIndex];
    numArray[minIndex] = numArray[i];
    numArray[i] = temp;
    console.log(numArray);
  }
};

selection__btn.addEventListener("click", selectionSort);
