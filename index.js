const num__input = document.querySelector(".num__input");
const selection__btn = document.querySelector(".selection__btn");
const bubble__btn = document.querySelector(".bubble__btn");
const insert__num = document.querySelector(".insert__num");
let num = document.createElement("span");
let numArray = [];
let view__num = document.querySelector(".view__num");

const selectionSort = () => {
  numArray = num__input.value.split(" ");
  num.classList = "view__insert-num";
  num.innerText = num__input.value;
  insert__num.appendChild(num);

  let length = numArray.length;
  let minIndex, temp, i, j;
  for (i = 0; i < length - 1; i++) {
    minIndex = i;
    const count = document.createElement("div");
    count.classList = "num__count";
    count.textContent = `${i + 1}번째 숫자는 ${numArray[minIndex]}`;
    view__num.appendChild(count);
    for (j = i + 1; j < length; j++) {
      if (numArray[j] < numArray[minIndex]) {
        minIndex = j;
        console.log("j는", minIndex);
      }
    }
    temp = numArray[minIndex];
    numArray[minIndex] = numArray[i];
    numArray[i] = temp;

    const countArray = document.createElement("span");
    countArray.classList = "num__span";
    countArray.textContent = numArray;

    count.appendChild(countArray);
    console.log(numArray);
    num__input.value = "";
  }
};

const bubbleSort = () => {
  numArray = num__input.value.split(" ");
  num.classList = "view__insert-num";
  num.innerText = num__input.value;
  insert__num.appendChild(num);

  let length = numArray.length;
  let i, j, temp;
  for (i = 0; i < length - 1; i++) {
    const count = document.createElement("div");
    count.classList = "num__count";
    count.textContent = `${i + 1}번째 숫자는 ${numArray[i]}`;
    view__num.appendChild(count);
    for (j = 0; j < length - 1 - i; j++) {
      if (numArray[j] > numArray[j + 1]) {
        temp = numArray[j];
        numArray[j] = numArray[j + 1];
        numArray[j + 1] = temp;
      }
    }
    const countArray = document.createElement("span");
    countArray.classList = "num__span";
    countArray.textContent = numArray;

    count.appendChild(countArray);
    console.log(numArray);
    num__input.value = "";
  }
};

selection__btn.addEventListener("click", selectionSort);
bubble__btn.addEventListener("click", bubbleSort);
