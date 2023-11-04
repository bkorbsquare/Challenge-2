// Define your Handlebars template
const aboutTemplate = Handlebars.compile(`
    <h2>{{headerText}}</h2>
    {{#each aboutText}}
        <div class="effectClass">{{text}}</div>
        <div class="banner1"></div>
    {{/each}}
`);

// Define your data
const aboutData = {
    headerText: "About Me:",
    aboutText: [
        { 
            text: "I'm studying coding right now. I recently obtained a Full-Stack Web Development Certificate from the University of Minnesota, as well as a CS50 (Introduction to Computer Science) Certificate from Harvard University. In my free time I enjoy weightlifting, cycling, and playing competitive card games. I'm currently looking for a job in the tech industry, so if you're interested in hiring me, please contact me by clicking below! Thanks for visiting my site, I hope you enjoy it! :)",
        },
    ]
}; 
