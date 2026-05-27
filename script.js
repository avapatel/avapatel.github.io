// Loads one section file into one spot on the page
function loadSection(sectionId, fileName) {
    return fetch(fileName)
        .then(function(response) {
            if (!response.ok) {
                throw new Error("Could not load " + fileName);
            }

            return response.text();
        })
        .then(function(html) {
            document.getElementById(sectionId).innerHTML = html;
        })
        .catch(function(error) {
            console.log(error);
            document.getElementById(sectionId).innerHTML = "";
        });
}

// Sets up the Economics course dropdowns
function setupCourseDropdowns() {
    const courses = document.querySelectorAll(".courseBox");

    for (let i = 0; i < courses.length; i++) {
        const button = courses[i].querySelector(".courseButton");

        button.addEventListener("click", function() {
            const clickedCourse = courses[i];
            const alreadyOpen = clickedCourse.classList.contains("open");

            for (let j = 0; j < courses.length; j++) {
                courses[j].classList.remove("open");
            }

            if (!alreadyOpen) {
                clickedCourse.classList.add("open");
            }
        });
    }
}

// Loads all section files from the sections folder
Promise.all([
    loadSection("homeSpot", "sections/home.html"),
    loadSection("aboutSpot", "sections/about.html"),
    loadSection("projectsSpot", "sections/projects.html"),
    loadSection("skillsSpot", "sections/skills.html"),
    loadSection("resumeSpot", "sections/resume.html"),
    loadSection("economicsSpot", "sections/economics.html"),
    loadSection("contactSpot", "sections/contact.html")
]).then(function() {
    setupCourseDropdowns();

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

// Closes mobile menu after clicking a link
const links = navLinks.querySelectorAll("a");

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
        navLinks.classList.remove("show");
    });
}

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();