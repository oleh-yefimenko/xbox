const iconMenu = document.querySelector('.menu-icon');
const menuBody = document.querySelector('.menu-body');

if (iconMenu) {
	iconMenu.addEventListener('click', function (e) {
		iconMenu.classList.toggle('active');
		menuBody.classList.toggle('active');
	});
}
