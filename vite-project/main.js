import "./style.css";

const navmenu = document.querySelector(".nav-menu");
const navbar = document.querySelector(".nav-bar");

navbar.firstElementChild.addEventListener("click", () => {
  navmenu.classList.toggle("hidden");
});
