/* OPACITY */
gsap.from("body > *", 1, {
    opacity: 0,
    ease: "power3.inOut",
    delay: 1,
    stagger: {
        amount: 0.5,
    },
});

gsap.from(".pic", 2, {
    scale: 0,
    ease: "power3.inOut",
    delay: 1,
    stagger: {
        amount: 0.5,
    },
});

gsap.from(".blob", 2, {
    scale: 0,
    ease: "power3.inOut",
    delay: 1,
    stagger: {
        amount: 0.5,
    },
});

/* MENU */
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const body = document.querySelector('body')

var mode = document.getElementById("mode");
mode.onclick = function() {
    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")) {
        body.style.transition = '2s';
        mode.src = "./assets/sun.png";
    } else {
        mode.src = "./assets/moon.png";
    }
}