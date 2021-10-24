let json = `[{
    "universe": "Marvel Comics",
    "nickname": "Мистик (Mystique)",
    "name": "Рэйвен Даркхолм (Raven Darkholme)",
    "type": "",
    "position": "",
    "enemies": "",
    "allies": "",
    "feature": "",
    "info": "",
    "img": "",
    "rating": ,
}, {
    "universe": "",
    "nickname": "",
    "name": "",
    "type": "",
    "position": "",
    "enemies": "",
    "allies": "",
    "feature": "",
    "info": "",
    "img": "",
    "rating": ,
}, {
    "universe": "",
    "nickname": "",
    "name": "",
    "type": "",
    "position": "",
    "enemies": "",
    "allies": "",
    "feature": "",
    "info": "",
    "img": "",
    "rating": ,
}]`;

document.addEventListener("DOMContentLoaded", (event) => {
    let evils = JSON.parse(json);

    let blockContent = "";

    for(let evil of evils) {
        blockContent +=
            `<div class="">`
            +

            `<h2>${evil.nickname}</h2>`
            +
            ((evil.universe == undefined)? `` : `<h2>${evil.universe}</h2>`)

            +
            `<div>`;
        ;
        // и т.д.
    }
    document.getElementById("evils").innerHTML = blockContent;
})