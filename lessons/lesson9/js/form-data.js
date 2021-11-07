let submitBtn = document.querySelector(".btn");
let form = document.querySelector(".form");

submitBtn.onclick = function (e) {
    e.preventDefault();

    fetch("https://httpbin.org/post", {
        method: "POST",
        body: new FormData(form),
    }).then(response => response.json())
        .catch(err => console.log(err));
}
