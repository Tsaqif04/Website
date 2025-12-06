const hamburgerBtn = document.getElementById("hamburgerBtn")
const navMenu = document.getElementById("navMenu")
hamburgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});
let screw = document.querySelector('.screw');
anime({
    targets: '.screw',
    rotate: 360,
    duration: 10000,
    easing: 'linear',
    loop: true
});
