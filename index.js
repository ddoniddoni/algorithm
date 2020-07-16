const num__input = document.querySelector(".num__input");
const num__btn = document.querySelector(".num__btn");
let num__view = document.querySelector(".num__view");
let numArray = [];

const onSubmit = () => {
  numArray = num__input.value;
  console.log(numArray);
};

num__btn.addEventListener("click", onSubmit);
