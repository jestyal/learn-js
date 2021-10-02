const numbersBlock = document.querySelector("#randomNumbers");


function createElement(textElement, mathElement) {
    let elementBlock = document.createElement("div");
    elementBlock.classList.add("mb_12");
    elementBlock.innerHTML = `${textElement}: ` + mathElement;
    numbersBlock.append(elementBlock);
}

function generateRandomNumbers() {
    numbersBlock.innerHTML = "";
    let textElements = ["Сгенерировали", "Минимальное", "Максимальное", "Среднее арифметическое", "Сумма чисел", "Произведение чисел"];

    let randomNumbers = [];
    let minNumber;
    let maxNumber;
    let averageNumber;
    let sumNumbers = 0;
    let multiplyNumbers = 1;


    function getRandomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    getRandomNumber(-10, 10);

    for (let i = 0; i < 10; i++) {
        randomNumbers[i] = getRandomNumber(-10, 10);
    }

    minNumber = Math.min.apply(null, randomNumbers);
    maxNumber = Math.max.apply(null, randomNumbers);


    for (let number of randomNumbers) {
        sumNumbers += number;
    }

    // for (let number of randomNumbers) {
    //     multiplyNumbers *= number;
    // }
    // тоже самое, другим циклом:
    for (let i = 0; i < randomNumbers.length; i++) {
        multiplyNumbers *= randomNumbers[i];
    }

    averageNumber = sumNumbers / randomNumbers.length;

    createElement(textElements[0], randomNumbers);
    createElement(textElements[1], minNumber);
    createElement(textElements[2], maxNumber);
    createElement(textElements[3], averageNumber);
    createElement(textElements[4], sumNumbers);
    createElement(textElements[5], multiplyNumbers);

}
