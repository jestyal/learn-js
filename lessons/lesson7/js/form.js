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


//
//
// class Calculator {
//     static sum (a, b) {
//         return a + b;
//     }
//
//     static minus (a, b) {
//         return a - b;
//     }
//
//     static mult (a, b) {
//         return a * b;
//     }
//
//     static divide (a, b) {
//         return a / b;
//     }
// }

// class Validation {
//     static сheckEmptyInputs(inputs) {
//         let isEmpty = false;
//         for (let input of inputs) {
//             if (input.value == '')
//                 isEmpty = true;
//         }
//         return isEmpty;
//     }
// }
//
// if (Validation.сheckEmptyInputs(document.getElementsByClassName('test'))) {
//     //есть пустой элемент
//     alert('Есть пустой элемент!');
// }