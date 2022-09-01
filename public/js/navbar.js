const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// hamburger on click displays menu
if (hamburger) {
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
}


// navigation item on click closes menu
document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))