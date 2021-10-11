let userName = document.querySelector("#userName");
let comment = document.querySelector("#comment");
let sendBtn = document.querySelector("#send-btn");
let resetBtn = document.querySelector("#reset-btn");
let commentsBlock = document.querySelector(".comments__wrap");
let avatarInput = document.querySelector("#avatar");
let avatarBlock = document.querySelector(".avatar__wrap");

// let reg = /viagra|XXX/gmi;
//
// function createElement(elementValue) {
//     let item = document.createElement("div");
//     item.classList.add("comment__item");
//     item.innerHTML = elementValue;
//     commentsBlock.append(item);
// }
//
//
// button.addEventListener("click", () => {
//     let value = input.value;
//
//     if (reg.test(value)) {
//         let result = value.replace(reg, "***");
//         // commentsBlock.textContent = result;
//         createElement(result);
//     } else {
//         createElement(value);
//     }
// });

//новое

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    saveToLocalStorage();

    let textAreaValue = comment.value;
    commentsBlock.innerHTML += userName.value + ": " + textAreaValue + "<br>";
    // function createElement(elementValue) {
    //     let item = document.createElement("div");
    //     item.classList.add("comment__item");
    //     item.innerHTML = elementValue;
    //     commentsBlock.append(item);
    // }
    // commentsBlock.textContent += textAreaValue;
    // commentsBlock.innerHTML += "<br>";
    comment.value = "";
    comment.focus();

    // localStorage.setItem('comments', document.querySelector('#container').innerHTML);
    // или
    // let localComments = localStorage.setItem('comments');
    // localStorage.setItem('comments', localComments + "<br>" + comment);


    let avatarFileName = avatarInput.files[0].name;
    // avatarBlock.innerHTML += `<img src="img/${avatarFileName}" />`;
});

document.querySelector('form').addEventListener('reset', (event) => {
    event.preventDefault();
    readFromLocalStorage();
});

function saveToLocalStorage() {
    let value = userName.value;
    localStorage.setItem('username', value);
}

function readFromLocalStorage() {
    let value = localStorage.getItem('username');
    userName.value = value;
}

readFromLocalStorage();

