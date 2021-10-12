let userName = document.querySelector("#userName");
let comment = document.querySelector("#comment");
// let sendBtn = document.querySelector("#send-btn");
// let resetBtn = document.querySelector("#reset-btn");
let commentsBlock = document.querySelector(".comments__wrap");
let avatarInput = document.querySelector("#avatar");
let errorMsg = document.querySelector(".msg-error");

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    saveToLocalStorage();

    errorMsg.innerHTML = "";

    let avatarFileName = avatarInput.files[0].name;
    let textAreaValue = comment.value;
    if(textAreaValue.length != 0) {
        commentsBlock.innerHTML += `<div class="avatar__wrap"><img class="avatar" src="img/${avatarFileName}" alt="" /></div>` + userName.value + ": " + textAreaValue + "<br>";
    } else {
        errorMsg.textContent += 'Введите комментарий';
    }
    comment.value = "";
    comment.focus();

    localStorage.setItem('comments', commentsBlock.innerHTML);
});

document.querySelector('form').addEventListener('reset', (event) => {
    event.preventDefault();
    readFromLocalStorage();

    localStorage.removeItem('comments');
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

