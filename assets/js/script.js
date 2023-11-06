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

// Initialize with the default section
let currentSection = "philosophy"; 

const updateSection = (sectionId, template, data) => {
  // Hide the current section if one is displayed
  if (currentSection !== "") {
    document.querySelector(`#${currentSection}`).innerHTML = "";
  }

  // Load the new template into the section
  document.querySelector(`#${sectionId}`).innerHTML = template(data);

  // Update the current section
  currentSection = sectionId;

  // If loading the Philosophy section, set a timeout (e.g., 6 seconds)
  if (sectionId === "philosophy") {
    setTimeout(function() {
      updateSection("about", aboutTemplate, aboutData);
    }, 4000);
  }
};

// Event listener for the Philosophy section on page load
document.addEventListener("DOMContentLoaded", function() {
  updateSection("philosophy", philosophyTemplate, philosophyData);
});

// Event listeners for the other sections
const aboutLink = document.querySelector("#about-link");
aboutLink.addEventListener("click", function() {
  updateSection("about", aboutTemplate, aboutData);
});

const projectsLink = document.querySelector("#projects-link");
projectsLink.addEventListener("click", function() {
  updateSection("projects", projectsTemplate, projectsData);
});

const resumeLink = document.querySelector("#resume-link");
resumeLink.addEventListener("click", function() {
  updateSection("resume", resumeTemplate, resumeData);
});
