// Loads one section file into one part of the homepage
function loadSection(sectionId, fileName) {
    return fetch(fileName)
        .then(function(response) {
            return response.text();
        })
        .then(function(html) {
            document.getElementById(sectionId).innerHTML = html;
        });
}

// Loads all the separate section files
Promise.all([
    loadSection("homeSpot", "sections/home.html"),
    loadSection("aboutSpot", "sections/about.html"),
    loadSection("projectsSpot", "sections/projects.html"),
    loadSection("skillsSpot", "sections/skills.html"),
    loadSection("resumeSpot", "sections/resume.html"),
    loadSection("contactSpot", "sections/contact.html")
]).then(function() {
    // If the page opens with a link like #projects, this makes it scroll there
    if (window.location.hash) {
        const section = document.querySelector(window.location.hash);

        if (section) {
            section.scrollIntoView();
        }
    }
});

// Mobile menu button
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", function() {
    navLinks.classList.toggle("show");
});

// Closes the mobile menu after clicking a link
const links = navLinks.querySelectorAll("a");

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
        navLinks.classList.remove("show");
    });
}

// Updates the footer year automatically
document.getElementById("year").textContent = new Date().getFullYear();