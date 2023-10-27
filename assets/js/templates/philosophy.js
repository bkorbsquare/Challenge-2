const philosophyTemplate = Handlebars.compile(`
    <h2>{{headerText}}</h2>
    <ul>
        {{#each philosophyText}}
            <li class="{{effectClass}}">{{text}}</li>
        {{/each}}
    </ul>
`);

const philosophyData = {
    headerText: "My Philosophy:",
    philosophyText: [
        { text: "Efficiency is beauty", effectClass: "effect1" },
        { text: "Progress is hope", effectClass: "effect2" }
    ]
};
