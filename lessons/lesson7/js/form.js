let errorMsg = document.querySelector('#msg-error');

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    errors = [];
    // chekNameInput();
    // chekPhoneInput();
    // chekEmailInput();
    checkAll();
});

//Проверка для одного поля
let errors = [];

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
    errorMsg.innerHTML = errors.join('<br>');
}

// function chekNameInput() {
//     let reg = /[А-ЯЁ][а-яё]+\s+[А-ЯЁ][а-яё]+(?:\s+[А-ЯЁ][а-яё]+)?/g;
//
//     let name = document.querySelector('#name');
//     if (name.value.match(reg)) {
//         return true;
//     }
//     else {
//         errorMsg.textContent = "ФИО введено некорректно";
//         return false;
//     }
// }
//
// function chekEmailInput() {
//     let reg = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/gm;
//
//     let email = document.querySelector('#email');
//     if (email.value.match(reg)) {
//         return true;
//     }
//     else {
//         errorMsg.textContent = "Электронная почта введена некорректно";
//         return false;
//     }
// }
//
// function chekPhoneInput() {
//     let reg = /(\+7|8)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d){6})/g;
//
//     let phone = document.querySelector('#phone');
//     if (phone.value.match(reg)) {
//         return true;
//     }
//     else {
//         errorMsg.textContent = "Телефон введен некорректно";
//         return false;
//     }
// }
//

