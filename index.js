const num__input = document.querySelector(".num__input");
const selection__btn = document.querySelector(".selection__btn");
const bubble__btn = document.querySelector(".bubble__btn");
const insert__num = document.querySelector(".insert__num");
const insertion__btn = document.querySelector(".insertion__btn");
const reset__btn = document.querySelector(".reset__btn");

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
      }
    }
    temp = numArray[minIndex];
    numArray[minIndex] = numArray[i];
    numArray[i] = temp;

    const countArray = document.createElement("span");
    countArray.classList = "num__span";
    countArray.textContent = numArray;

    count.appendChild(countArray);
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
    num__input.value = "";
  }
};

const insertionSort = () => {
  numArray = num__input.value.split(" ");
  num.classList = "view__insert-num";
  num.innerText = num__input.value;
  insert__num.appendChild(num);

  let i, j, temp;
  let length = numArray.length;
  for (i = 1; i < length; i++) {
    const count = document.createElement("div");
    count.classList = "num__count";
    count.textContent = `${i}번째 숫자는 ${numArray[i]}`;
    view__num.appendChild(count);

    temp = numArray[i]; // 새로운 숫자 선택
    for (j = i - 1; j >= 0 && temp < numArray[j]; j--) {
      numArray[j + 1] = numArray[j];
    }
    numArray[j + 1] = temp;
    const countArray = document.createElement("span");
    countArray.classList = "num__span";
    countArray.textContent = numArray;

    count.appendChild(countArray);
    num__input.value = "";
  }
};

const handleReset = () => {
  num.removeChild(num.firstChild);
  while (view__num.hasChildNodes()) {
    view__num.removeChild(view__num.firstChild);
  }
};

selection__btn.addEventListener("click", selectionSort);
bubble__btn.addEventListener("click", bubbleSort);
insertion__btn.addEventListener("click", insertionSort);

reset__btn.addEventListener("click", handleReset);
