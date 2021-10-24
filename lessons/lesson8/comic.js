let json = `[{
    "title": "Rawen",
    "universe": "DC",
}, {
    "title": "Cat Woman",
    "universe": "DC",
}]`;

document.addEventListener("DOMContentLoaded", (event) => {
    let evils = JSON.parse(json);

    let blockContent = "";

    for(let evil of evils) {
        blockContent +=
            `<div class="">`
            +

            `<h2>${evil.title}</h2>`
            +
            ((evil.universe == undefined)? `` : `<h2>${evil.universe}</h2>`)

            +
            `<div>`;
        ;
        // и т.д.
    }
    document.getElementById("evils").innerHTML = blockContent;
})