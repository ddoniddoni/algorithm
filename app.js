const num__grp = document.querySelectorAll(".num__grp");
const bubble__btn = document.querySelector(".bubble__btn");
let num__array = [];

const handleArray = () => {
  for (let i = 0; i < num__grp.length; i++) {
    num__array.push(Math.floor(num__grp[i].textContent));
  }
};

handleArray();

const bubbleSort = () => {
  let length = num__array.length;
  let i, j, temp;
  for (i = 0; i < length - 1; i++) {
    // if (num__array[i] === Math.floor(num__grp[i].textContent)) {
    //   num__grp[i].style.color = "red";
    // }
    // console.log(num__array[i], Math.floor(num__grp[i].textContent));
    for (j = 0; j < length - 1 - i; j++) {
      if (num__array[j] > num__array[j + 1]) {
        temp = num__array[j];
        num__array[j] = num__array[j + 1];
        num__array[j + 1] = temp;
      }
    }
  }
  console.log(num__array);

  for (let i = 0; i < length; i++) {
    num__grp[i].textContent = `${num__array[i]}`;
  }
};

bubble__btn.addEventListener("click", bubbleSort);
