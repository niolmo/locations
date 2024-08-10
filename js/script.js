let creatBtn = document.querySelector(".page__loc-btn");
let container = document.querySelector(".container");
let close = document.querySelector(".container__close");

creatBtn.addEventListener("click", () => {
  container.classList.toggle("container--active");
});

close.addEventListener("click", () => {
  container.classList.remove("container--active");
});
