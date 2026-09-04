// =========================
// NAVBAR SCROLL EFFECT
// =========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.borderBottomColor = "#444";
    } else {
        header.style.borderBottomColor = "#1f1f1f";
    }

});


// =========================
// SCROLL REVEAL
// =========================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);

sections.forEach((section) => {
    observer.observe(section);
});


// =========================
// ACTIVE NAVIGATION
// =========================

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 200) {
            currentSection = section.getAttribute("id");
        }

    });

    navItems.forEach((link) => {

        link.style.color = "#888";

        if (link.getAttribute("href") === "#" + currentSection) {
            link.style.color = "#fff";
        }

    });

});


// =========================
// MOBILE MENU
// =========================

const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    mobileNav.classList.toggle("active");
    menuToggle.classList.toggle("active");

});


// =========================
// CLOSE MOBILE MENU
// =========================

navItems.forEach((link) => {

    link.addEventListener("click", () => {

        mobileNav.classList.remove("active");
        menuToggle.classList.remove("active");

    });

});


// =========================
// CONSOLE MESSAGE
// =========================

console.log("Welcome to RAKIN.DEV 🚀");