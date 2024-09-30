const hamburger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".navbar-menu");

hamburger.addEventListener("click", () => {
	navMenu.classList.toggle("active");
});
