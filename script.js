console.log("JS is connected!");

// Welcome Message
alert("Welcome to my Portfolio!");

// About Button
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

// Select Multiple Elements
const buttons = document.querySelectorAll(".btn");
console.log(buttons);

// Change Heading
const heading = document.querySelector(".hero h1");

heading.addEventListener("click", function () {
    heading.innerText = "Frontend Developer";
});

// Skills Section Color Change
const skillsSection = document.getElementById("skills");

skillsSection.addEventListener("click", function () {
    skillsSection.style.backgroundColor = "#dbeafe";
});

// Mouse Events
buttons.forEach(button => {
    button.addEventListener("mouseover", () => {
        console.log("Mouse entered button");
    });

    button.addEventListener("mouseout", () => {
        console.log("Mouse left button");
    });
});