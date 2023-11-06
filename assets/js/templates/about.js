// Define your Handlebars template
const aboutTemplate = Handlebars.compile(`
    <h2>{{headerText}}</h2>
    {{#each aboutItems}}
        {{#if text}}
            <div class="aboutText">{{text}}</div>
        {{/if}}
        {{#if image}}
            <img src="{{image}}" alt="{{alt}}" class="aboutPhotos">
        {{/if}}
    {{/each}}
`);

// Define your data
const aboutData = {
    headerText: "About Me:",
    aboutItems: [
        { 
            text: "I'm studying coding right now. I recently obtained a Full-Stack Web Development Certificate from the University of Minnesota, as well as a CS50 (Introduction to Computer Science) Certificate from Harvard University. In my free time I enjoy weightlifting, cycling, and playing competitive card games. I'm currently looking for a job in the tech industry, so if you're interested in hiring me, please contact me by clicking below! Thanks for visiting my site, I hope you enjoy it! :)",
        },
        { 
            image: "assets/images/weightroom.jpg",  
            alt: "A picture of me in the weight room."
        },
        { 
            image: "assets/images/cycling.jpg",  
            alt: "A picture of me with my bike and gear."
        },
        { 
            image: "assets/images/playerstour.jpg",  
            alt: "A picture of me at a prestigious Magic the Gathering tournament."
        }
    ]
};
