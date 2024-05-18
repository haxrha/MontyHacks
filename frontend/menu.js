function toggleMenu() {
	document.getElementsByClassName("collapsed-menu")[0].classList.toggle("open");
}

document
	.getElementsByClassName("hamburger")[0]
	.addEventListener("click", toggleMenu);
