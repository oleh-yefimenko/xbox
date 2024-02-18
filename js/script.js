// Меню
const iconMenu = document.querySelector(".menu-button");
const bodyMenu = document.querySelector(".menu");

if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		iconMenu.classList.toggle("active");
		bodyMenu.classList.toggle("active");
	});
}
