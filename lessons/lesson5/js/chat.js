let input = document.querySelector("#input");
let button = document.querySelector("#send-btn");
let commentsBlock = document.querySelector(".comments__wrap");

let reg = /viagra|XXX/gmi;

function createElement(elementValue) {
    let item = document.createElement("div");
    item.classList.add("comment__item");
    item.innerHTML = elementValue;
    commentsBlock.append(item);
}


button.addEventListener("click", () => {
    let value = input.value;

    if (reg.test(value)) {
        let result = value.replace(reg, "***");
        // commentsBlock.textContent = result;
        createElement(result);
    } else {
        createElement(value);
    }
});
