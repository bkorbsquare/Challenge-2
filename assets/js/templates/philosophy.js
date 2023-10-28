const philosophyTemplate = Handlebars.compile(`
    <h2>{{headerText}}</h2>
        {{#each philosophyText}}
            <div class="{{effectClass}}">{{text}}</div>
        {{/each}}
`);

const philosophyData = {
    headerText: "My Philosophy:",
    philosophyText: [
        { text: "Efficiency is beauty", effectClass: "effect1" },
        { text: "Progress is hope", effectClass: "effect2" }
    ]
};
