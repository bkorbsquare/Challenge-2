// Light/dark mode switcher
document.addEventListener("DOMContentLoaded", function () {
    const themeSwitcher = document.getElementById("theme-switcher");
    const html = document.documentElement; // Reference to the <html> element

    // Check the user's preference from local storage
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
        html.setAttribute("data-theme", "dark");
        themeSwitcher.checked = true;
    }

    themeSwitcher.addEventListener("change", function () {
        if (themeSwitcher.checked) {
            // Switch to dark mode
            html.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
        } else {
            // Switch to light mode
            html.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
        }
    });
});

// Collapse text animations on a delay after page load
document.addEventListener("DOMContentLoaded", function () {
    const philosophy1 = document.querySelector(".philosophy-1");
    const philosophy2 = document.querySelector(".philosophy-2");

    // Function to show the statements and start animations
    function showStatements() {
        philosophy1.style.display = "block";
        philosophy2.style.display = "block";
        // Trigger animations here by adding a class to each element.
        philosophy1.classList.add("appear");
        philosophy2.classList.add("appear");
    }

    // Show the statements when the page is loaded
    showStatements();

    // Hide the statements after X time
    setTimeout(function () {
        philosophy1.style.display = "none";
        philosophy2.style.display = "none";
    }, 4000); // Adjust the time according to your animation duration
});

// Load templates after a delay
document.addEventListener("DOMContentLoaded", function() {
    // Load the Philosophy template on page load
    document.querySelector("#philosophy").innerHTML = philosophyTemplate(philosophyData);

    // Load the About template after a delay (e.g., 6 seconds)
    setTimeout(function() {
        document.querySelector("#about").innerHTML = aboutTemplate(aboutData);
    }, 6000);
});

// Load templates on click
const aboutLink = document.querySelector("#about-link");
aboutLink.addEventListener("click", function() {
    // Load the About template when the "About" link is clicked
    document.querySelector("#about").innerHTML = aboutTemplate(aboutData);
});

const projectsLink = document.querySelector("#projects-link");
projectsLink.addEventListener("click", function() {
    // Load the Projects template when the "Projects" link is clicked
    document.querySelector("#projects").innerHTML = projectsTemplate(projectsData);
});

const resumeLink = document.querySelector("#resume-link");
resumeLink.addEventListener("click", function() {
    // Load the Resume template when the "Resume" link is clicked
    document.querySelector("#resume").innerHTML = resumeTemplate(resumeData);
});
