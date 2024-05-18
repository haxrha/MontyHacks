function toggleMenu() {
	document.getElementsByClassName("collapsed-menu")[0].classList.toggle("open");
}

document
	.getElementsByClassName("hamburger")[0]
	.addEventListener("click", toggleMenu);

document.getElementsByClassName("home")[0].addEventListener("click", () => {
	window.location.href = "home";
});

document.getElementsByClassName("home")[0].addEventListener("click", () => {
	window.location.href = "banks";
});
