// This makes the mobile menu open and close
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("show");
});

// This automatically updates the year in the footer
const yearText = document.getElementById("year");
yearText.textContent = new Date().getFullYear();