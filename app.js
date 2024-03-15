const signInBtnLink = document.querySelector(".signInBtn-link");
const signUpBtnLink = document.querySelector(".signUpBtn-link");
const main = document.querySelector(".main");

signUpBtnLink.addEventListener("click", () => {
  main.classList.toggle("active");
});
signInBtnLink.addEventListener("click", () => {
  main.classList.toggle("active");
});
