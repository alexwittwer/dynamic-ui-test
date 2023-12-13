const navmenu = document.querySelector(".nav-menu");
const navbar = document.querySelector(".nav-bar");

navbar.addEventListener("click", () => {
  navmenu.classList.toggle("hidden");
});
