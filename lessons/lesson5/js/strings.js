let splitNameBlock = document.querySelector("#splitName");
let fullNameInput = document.querySelector("#fullName");
let fullName;

function createElement(textElements, elementValue) {
    let elementBlock = document.createElement("div");
    elementBlock.classList.add("mb_12");
    elementBlock.innerHTML = textElements + ': <input type="text" class="form__input" value="' + elementValue + '" /> ';
    splitNameBlock.append(elementBlock);
}


fullNameInput.addEventListener("change", (event) => {
    //берем значение из инпута и приводим его к нижнему регистру
    fullName = fullNameInput.value.toLowerCase();
})

function getSplitName() {
    splitNameBlock.innerHTML = "";
    let textElements = ["Имя", "Фамилия", "Отчество"];

    //берем получивщееся значение, убираем пробелы вначале и вконце, разделяем по пробелу
    let fullNameArray = fullName.trim().split(" ");

    for(let i = 0; i < fullNameArray.length; i++) {
        if(fullNameArray[i] === "") {
            //убираем все лишние пробелы
            fullNameArray.splice(i, 1);
            i--;
        }
    }
    //или так убираем лишние пробелы
    // fullNameArray = fullNameArray.filter(i => i !== "")


    let name = fullNameArray[1].toString();
    let patronymic = fullNameArray[2].toString();
    let lastname = fullNameArray[0].toString();

    //делаем первую букву заглавной
    name = name[0].toUpperCase() + name.slice(1);
    lastname = lastname[0].toUpperCase() + lastname.slice(1);
    patronymic = patronymic[0].toUpperCase() + patronymic.slice(1);

    createElement(textElements[0], name);
    createElement(textElements[1], lastname);
    createElement(textElements[2], patronymic);

}