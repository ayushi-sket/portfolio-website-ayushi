console.log("JS is connected!");

// Welcome Message
alert("Welcome to my Portfolio!");

// About Section Button
const aboutBtn = document.getElementById("aboutBtn");

console.log(aboutBtn);

aboutBtn.addEventListener("click", function () {
    document.getElementById("aboutText").innerText =
        "I am learning JavaScript and building interactive websites.";
});

// Dark Mode Button
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

// Select Multiple Elements with Same Class
const buttons = document.querySelectorAll(".btn");

console.log(buttons);

// Select Heading and Change Text on Click
const heading = document.querySelector(".hero h1");

heading.addEventListener("click", function () {
    heading.innerText = "Frontend Developer";
});

// Skills Section Color Change
const skillsSection = document.getElementById("skills");

skillsSection.addEventListener("click", function () {
    skillsSection.style.backgroundColor = "#dbeafe";
});