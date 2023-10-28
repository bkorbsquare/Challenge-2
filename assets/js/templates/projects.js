const projectsTemplate = Handlebars.compile(`
    <h2>{{headerText}}</h2>
        {{#each projectsItems}}
            <div class="{{effectClass}}">{{text}}</div>
        {{/each}}
`);

const projectsData = {
    headerText: "My projects:",
    projectsItems: [
        { 
            link: "https://salty-ridge-35552.herokuapp.com/",
            image: "assets/images/project3.png",
            alt: "Website Screenshot 1"
        },
        {
            link: "https://bkorbsquare.github.io/Module-5-Challenge/",
            image: "assets/images/Module-5-Challengescreenshotbw.jpg",
            alt: "Website Screenshot 2"
        }
    ]
};