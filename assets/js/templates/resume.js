const resumeTemplate = Handlebars.compile(`
    <h2>{{headerText}}</h2>
    <ul>
        {{#each resumeItems}}
            <li class="{{effectClass}}">{{text}}</li>
        {{/each}}
    </ul>
`);

const resumeData = {
    headerText: "My resume & references:",
    resumeItems: [
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