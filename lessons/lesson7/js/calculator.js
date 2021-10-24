let result = 0;

class Calculator {
    static sum (a, b) {
        return a + b;
    }

    static diff (a, b) {
        return a - b;
    }

    static mult (a, b) {
        return a * b;
    }

    static divide (a, b) {
        if (b === 0) {
            return 'На ноль делить нельзя!';
        } else {
            return a / b;
        }
    }
}


function getNumber1() {
    return +document.getElementById('number1').value;
}

function getNumber2() {
    return +document.getElementById('number2').value;
}

function showResult(result) {
    let resultDiv = document.getElementById("calculator__result");
    resultDiv.innerHTML = result;
}

function calcSum() {
    result = Calculator.sum(getNumber1(), getNumber2());
    console.log(result);
    showResult(result);
}

function calcDiff() {
    result = Calculator.diff(getNumber1(), getNumber2());
    console.log(result);
    showResult(result);
}

function calcMult() {
    result = Calculator.mult(getNumber1(), getNumber2());
    console.log(result);
    showResult(result);
}

function calcDiv() {
    result = Calculator.divide(getNumber1(), getNumber2());
    console.log(result);
    showResult(result);
}


const person = {
    name: 'Valera',
    age: 23,
};

let city = person.city;
city = 'Amsterdam'

console.log(person);