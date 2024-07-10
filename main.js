const hamContainer = document.querySelector("#header__main-nav");

const hamburger = document.querySelector(".header__header--hamburger");

const links = document.querySelectorAll(".header__main--links li");

hamburger.addEventListener("click", () => {
  hamContainer.classList.toggle("clicked");
  links.forEach((link) => link.classList.toggle("fade"));
});
