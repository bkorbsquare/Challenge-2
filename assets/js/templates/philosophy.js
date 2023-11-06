const philosophyTemplate = Handlebars.compile(`
    <div class="centered-elements">
        {{#each philosophyText}}
            <div class="effect-container">
                <div class="{{effectClass}}">{{text}}</div>
            </div>
        {{/each}}
    </div>
`);

const philosophyData = {
    philosophyText: [
        { text: "Efficiency is beauty", effectClass: "effect1" },
        { text: "Progress is hope", effectClass: "effect2" }
    ],
};
