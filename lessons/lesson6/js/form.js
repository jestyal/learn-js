let errorMsg = document.getElementById('msg-error');
let successMsg = document.getElementById('msg-success');

let name = document.getElementById('name'),
    phone = document.getElementById('phone'),
    email = document.getElementById('email'),
    birthday = document.getElementById('birthday'),
    password = document.getElementById('password'),
    policyCheckbox = document.getElementById('policy-check');

function validateInput() {
    errorMsg.innerHTML = '';
    successMsg.innerHTML = '';

    if(name.value == '') {
        errorMsg.innerHTML += `Ваше имя не заполнено<br>`;
    }

    if(phone.value == '') {
        errorMsg.innerHTML += `Ваш телефон не заполнен<br>`;
    }

    if(email.value == '') {
        errorMsg.innerHTML += `Ваш email не заполнен<br>`;
    }

    if(birthday.value == '') {
        errorMsg.innerHTML += `Ваш день рождения не заполнен<br>`;
    }

    if(password.value.length <= 7) {
        errorMsg.innerHTML += `Ваш пароль слишком короткий<br>`;
    }

    if(!policyCheckbox.checked) {
        errorMsg.innerHTML += `Примите политику использования данных<br>`;
    }

    if(name.value != '' && phone.value != '' && email.value != '' && birthday.value != '' && password.value != '' && policyCheckbox.checked) {
        successMsg.innerHTML += `Добро пожаловать, ${name.value}!`;
    }

}