function sumInput() {
    let numbers = [];

    while (true) {
        // let value = +prompt("Введите число:", 0);
        // if (value === 0 || isNaN(value)) break;
        let value = prompt("Введите число:", 0);
        if (value === null || value === "" || !isFinite(value)) break;
        numbers.push(+value);
    }

    //сумма элементов массива
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }

    //сортировка по возрастанию
    let sort = numbers.sort(function compareNumbers(a, b) {
        return a - b;
    });

    return `Сумма: ${sum}\nМассив: ${sort}`;
}
