'use strict';

class Cat {
    constructor(nickname, breed, feeds, gender, comment) {
        this.nickname = nickname;
        this.breed = breed;
        this.feeds = feeds;
        this.gender = gender;
        this.comment = comment;
    }
}

document.querySelector('.form').addEventListener('submit', (event) => {
    event.preventDefault();

    const nickname = document.querySelector("#nickname").value;
    // const name = document.querySelector("#name").value;
    // const contacts = document.querySelector("#contacts").value;

    const breed = document.querySelector("#breed").value;

    const feeds = [];
    const feedCheckboxes = document.querySelectorAll("input[type='checkbox']:checked");
    for (let i = 0; i < feedCheckboxes.length; i++) {
        feeds.push(feedCheckboxes[i].value);
    }

    const gender = document.querySelector("input[name='gender']:checked")?.value;

    const comment  = document.querySelector("#comment")?.value;

    let cat = new Cat(nickname, breed, feeds, gender, comment);
    console.log('Кличка: ', cat.nickname);
    console.log('Порода: ', cat.breed);
    console.log('Корм: ', cat.feeds);
    console.log('Пол: ', cat.gender);
    console.log('Комментарий: ', cat.comment);
})
