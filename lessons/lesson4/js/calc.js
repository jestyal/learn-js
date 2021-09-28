const form = document.querySelector('#calculate-form');
const resultText = +document.querySelector('#result span');

//все значения инпутов и селектов
const auctionPrice = +document.querySelector('#calculator_raw_cost').value,
    engineVolume = +document.querySelector('#calculator_volume').value,
    enginePower = +document.querySelector('#calculator_power').value;

//все радио кнопки
const radioFuelType = document.getElementsByName('calculator[fueltype]');

//все поля с ошибками
const msgErrorAuctionPrice = document.querySelector('#msg-error_raw_cost'),
    msgErrorAuction = document.querySelector('#msg-error_auction'),
    msgErrorServiceType = document.querySelector('#msg-error_service_type'),
    msgErrorFuelType = document.querySelector('#msg-error_fuel_type'),
    msgErrorEngineVolume = document.querySelector('#msg-error_volume'),
    msgErrorEnginePower = document.querySelector('#msg-error_power');

//изначально скрываю все сообщения об ошибках
const allErrors = document.querySelectorAll('.form__msg');
allErrors.forEach(function(val) {
    val.style.display = 'none';
});


//блок с аукционом и типом услуг
const auction = document.querySelector('#calculator_auction');

const servicesBlock = document.querySelector("#services");
servicesBlock.style.display = "none";

auction.addEventListener("change", (event) => {
    const servicesContainer = document.querySelector("#calculator_service_type");
    const services1 = ['Целый автомобиль', 'Распил легковой', 'Конструктор легковой'];
    const services2 = ['Распил рамный', 'Запчасти на палете'];

    //создаю блок с типом услуг
    let auctionValues = [];
    servicesContainer.innerHTML = "";

    function createServices(auctionValues) {
        for (let i = 0; i < auctionValues.length; i++) {
            let serviceTypeElement = document.createElement("div");
            serviceTypeElement.classList.add("form__radio");
            serviceTypeElement.innerHTML = '<label class="form__label"><input type="radio" class="input__radio" name="service_type" /> ' + auctionValues[i] + '</label>';
            servicesContainer.append(serviceTypeElement);
        }
    }

    // в зависимости от выбранного аукциона, показываем тот или иной список услуг
    const auctionType = auction.value;
    if(auctionType == 0) {
        servicesBlock.style.display = "none";
    } else if(auctionType == 1) {
        servicesBlock.style.display = "block";
        createServices([...services1]);
    } else if(auctionType == 2) {
        servicesBlock.style.display = "block";
        createServices([...services2]);
    }

})


// блок с типом топлива
const engineVolumeBlock = document.querySelector("#engine_volume");
engineVolumeBlock.style.display = "none";
const enginePowerBlock = document.querySelector("#engine_power");
enginePowerBlock.style.display = "none";

const fuelTypeBlock = document.querySelector('#calculator_fuel_type');
fuelTypeBlock.innerHTML = "";

const fuelTypes = ['бензин (включая гибрид)', 'дизельное топливо', 'электрический'];

function createFuelTypes () {
    for (let i = 0; i < fuelTypes.length; i++) {
        let fuelTypeElement = document.createElement("div");
        fuelTypeElement.classList.add("form__radio");
        fuelTypeElement.innerHTML = '<label class="form__label"><input type="radio" class="input__radio" name="fuel_type" value="' + [i] + '" /> ' + fuelTypes[i] + '</label>';

        let radioFuelType = fuelTypeElement.querySelector("input");
        radioFuelType.addEventListener("change", (event) => {
            const fuelValue = radioFuelType.value;
            if(fuelValue == 0 || fuelValue == 1) {
                engineVolumeBlock.style.display = "block";
                enginePowerBlock.style.display = "block";
            } else if(fuelValue == 2) {
                enginePowerBlock.style.display = "block";
            }
        })

        fuelTypeBlock.append(fuelTypeElement);
    }
}
createFuelTypes ();
//
// fuelTypeBlock.addEventListener("change", (event) => {
//     const fuelValue = fuelTypeBlock.value;
//     if(fuelValue[0] || fuelValue[1]) {
//         engineVolumeBlock.style.display = "block";
//         enginePowerBlock.style.display = "block";
//     } else if(fuelValue[2]) {
//         enginePowerBlock.style.display = "block";
//     }
// })




form.addEventListener('submit', (event) => {
    event.preventDefault();
})

function calcTotalCost() {
    // let totalCost;
    // resultText.textContent = totalCost;
}
