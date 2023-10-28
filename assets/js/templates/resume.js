const resumeTemplate = Handlebars.compile(`
    <h2>{{headerText}}</h2>
        {{#each resumeItems}}
            <a href="{{link}}">
                <img src="{{image}}" alt="{{alt}}"> 
            </a>
        {{/each}}
`);

const resumeData = {
    headerText: "My resume & references:",
    resumeItems: [
        { 
            link: "https://salty-ridge-35552.herokuapp.com/",
            image: "project3.png",  
            alt: "Website Screenshot 1"
        },
        {
            link: "https://bkorbsquare.github.io/Module-5-Challenge/",
            image: "Module-5-Challengescreenshotbw.jpg", 
            alt: "Website Screenshot 2"
        }
    ]
};
