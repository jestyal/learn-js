let errors = [];

let submitBtn = document.querySelector(".form__btn");
submitBtn.onclick = function (e) {
    e.preventDefault();

    errors = [];
    checkAll();

    let user = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        birth: document.getElementById("birthday").value,
        pass: document.getElementById("password").value,
    }
    fetch("https://httpbin.org/post", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-Type":  "application/json;charset=utf-8'",
        }
    }).then(response => response.json())
        .then(user => console.log(user))
        .catch(err => console.log(err));
}


//Проверка для одного поля
function checkValidity(input) {

    let validity = input.validity;

    if (validity.valueMissing) {
        let min = input.min;
        errors.push('Поле ' + input.placeholder + ' не заполнено');
    }

    if (validity.patternMismatch) {
        errors.push('Неверный формат заполнения');
    }

    if (validity.rangeOverflow) {
        let max = input.maxLength;
        errors.push('Максимальное значение не может быть больше чем ' + max);
    }

    if (validity.rangeUnderflow) {
        let min = input.minLength;
        errors.push('Минимальное значение не может быть больше чем ' + min);
    }

}

//Проверка для всех полей
function checkAll() {
    //получаем все инпуты
    let inputs = document.querySelectorAll("input");

    //перебираем их и на каждый вызываем функцию валидации
    for (let input of inputs) {
        checkValidity(input);
    }

    //выводим ошибки в div
    document.querySelector('#msg-error').innerHTML = errors.join('<br>');
}


