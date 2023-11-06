const projectsTemplate = Handlebars.compile(`
    <h2>{{headerText}}</h2>
        {{#each projectsItems}}
            <a href="{{link}}">
                <img src="{{image}}" alt="{{alt}}" class="projectsPhotos"> 
            </a>
        {{/each}}
`);

const projectsData = {
    headerText: "My projects:",
    projectsItems: [
        { 
            link: "https://salty-ridge-35552.herokuapp.com/",
            image: "assets/images/project3.png",  
            alt: "A screenshot of a full-stack trivia app."
        },
        {
            link: "https://bkorbsquare.github.io/Module-5-Challenge/",
            image: "assets/images/WorkDayScheduler.PNG", 
            alt: "A screenshot of a workday scheduler."
        }
    ]
};