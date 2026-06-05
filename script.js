console.log("JS is connected!");

// Welcome message
alert("Welcome to my Portfolio!");

// About Section Update
const aboutBtn = document.getElementById("aboutBtn");

aboutBtn.addEventListener("click", function () {
    document.getElementById("aboutText").innerText =
    "I am learning JavaScript and building interactive websites.";
});

// Dark Mode Toggle
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});