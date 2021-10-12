let date = document.querySelector("#date");
let noteTitle = document.querySelector("#noteTitle");
let comment = document.querySelector("#comment");


document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    saveToLocalStorage();
});

function saveToLocalStorage() {
    let value = date.value;
    let title = noteTitle.value;
    let noteText = comment.value;
    localStorage.setItem('date', value);
    localStorage.setItem('title', title);
    localStorage.setItem('comment', noteText);
}
