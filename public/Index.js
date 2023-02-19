// Check the language direction of the page
let langDir = getComputedStyle(document.body).direction;
console.log(langDir);
if (langDir === "rtl") {
    // If the language is right-to-left, add the "right" class to the menu bar
    let menuBar = document.querySelector(".menu-bar-right");
    menuBar.style.display = "none";



    const menuToggle = document.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', () => {
        let menuBar = document.querySelector(".menu-bar-left");
        menuBar.classList.toggle('menu-bar-left-show');
    });



} else {
    // If the language is left-to-right, add the "left" class to the menu bar
    let menuBar = document.querySelector(".menu-bar-left");
    menuBar.style.display = "none";

    const menuToggle = document.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', () => {
        let menuBar = document.querySelector(".menu-bar-right");
        menuBar.classList.toggle('menu-bar-right-show');
    });


}



