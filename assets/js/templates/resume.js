const resumeTemplate = Handlebars.compile(`
    <h2 class="headerClass">{{headerText}}</h2>
    {{#each resumeItems}}
        <a href="{{link}}">
            {{#if image}}
                <img src="{{image}}" alt="{{alt}}" class="resumePhotos">
            {{/if}}
        </a>
    {{/each}}
`);

const resumeData = {
    headerText: "My resume & references:",
    resumeItems: [
        { 
            link: "https://docs.google.com/document/d/166fgrYHNgISQNwGMRPgH0b6Dv8B2yhsfOVyonBP5-Kc/edit?usp=sharing",
            image: "assets/images/resume.PNG",  
            alt: "A clickable picture of my resume, linking to the Google Doc."
        },
        {
            link: "https://docs.google.com/document/d/1OK6qKm88LgER2f6C0p9uyUQgwcYb6X8mqntl_TvoHzM/edit?usp=sharing",
            image: "assets/images/references.JPG", 
            alt: "A clickable picture of my references, linking to the Google Doc."
        }
    ]
};
