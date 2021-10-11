
let successMsg = document.querySelector('#msg-success');
let errorMsg = document.querySelector('#msg-error');

let name = document.querySelector('#name'),
    phone = document.querySelector('#phone'),
    email = document.querySelector('#email'),
    birthday = document.querySelector('#birthday'),
    password = document.querySelector('#password'),
    policyCheckbox = document.querySelector('#policy-check');

// function validateInput() {
//     errorMsg.innerHTML = '';
//     successMsg.innerHTML = '';
//
//     if(name.value == '') {
//         errorMsg.innerHTML += `Ваше имя не заполнено<br>`;
//     }
//
//     if(phone.value == '') {
//         errorMsg.innerHTML += `Ваш телефон не заполнен<br>`;
//     }
//
//     if(email.value == '') {
//         errorMsg.innerHTML += `Ваш email не заполнен<br>`;
//     }
//
//     if(birthday.value == '') {
//         errorMsg.innerHTML += `Ваш день рождения не заполнен<br>`;
//     }
//
//     if(password.value.length <= 7) {
//         errorMsg.innerHTML += `Ваш пароль слишком короткий<br>`;
//     }
//
//     if(!policyCheckbox.checked) {
//         errorMsg.innerHTML += `Примите политику использования данных<br>`;
//     }
//
//     if(name.value != '' && phone.value != '' && email.value != '' && birthday.value != '' && password.value != '' && policyCheckbox.checked) {
//         successMsg.innerHTML += `Добро пожаловать, ${name.value}!`;
//     }
//
// }

//Проверка для одного поля
let errors = [];
function checkValidity(input) {
    let validity = input.validity;

    if (validity.patternMismatch) {
        errors.push('Неверный формат заполнения');
    }

    if (validity.rangeOverflow) {
        let max = input.max;
        errors.push('Максимальное значение не может быть больше чем ' + max);
    }

    if (validity.rangeUnderflow) {
        let min = input.min;
        errors.push('Минимальное значение не может быть больше чем ' + min);
    }

    // И остальные проверки валидности...
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

    errorMsg.innerHTML = errors.join('. \n');
}


function validateEmail(email) {
    let mailFormat = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/gm;

    // let reg = /java|котики|hello/gim;
    // if (reg.test(value)) {
    //     let result = value.replace(reg, "XXXX");
    //     resultNode.textContent = result;
    // } else {
    //     resultNode.textContent = "Да!";
    // }
    if (email.value.match(mailFormat)) {
        return true;
    }
    else {
        errorMsg.textContent = "Ваш адрес электронной почты введен неверно!";
        return false;
    }
}