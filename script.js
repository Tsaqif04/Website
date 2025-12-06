const hamburgerBtn = document.getElementById("hamburgerBtn")
const navMenu = document.getElementById("navMenu")
hamburgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});