const aboutTemplate = Handlebars.compile(`
    <h2>{{headerText}}</h2>
    <ul>
        {{#each aboutText}}
            <li class="{{effectClass}}">{{text}}</li>
        {{/each}}
    </ul>
`);

const aboutData = {
    headerText: "About Me:",
    aboutText: [
        { text: "I'm studying coding right now. I recently obtained a Full-Stack Web Development Certificate from the University of Minnesota, as well as a CS50 (Introduction to Computer Science) Certificate from Harvard University. In my free time I play competitive card games.", effectClass: "effect1" },
    ]
};