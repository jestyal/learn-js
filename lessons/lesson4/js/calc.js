let form = document.querySelector('#calculate-form');
let resultText = +document.querySelector('#result span');

//все значения инпутов и селектов
let auctionPrice = +document.querySelector('#calculator_raw_cost').value,
    auction = +document.querySelector('#calculator_auction').value,
    engineVolume = +document.querySelector('#calculator_volume').value,
    enginePower = +document.querySelector('#calculator_power').value,
    engineDeclaredCost = +document.querySelector('#calculator_declared_cost').value;

//все радио кнопки
let radioServiceType = document.getElementsByName('calculator[service_type]'),
    radioFuelType = document.getElementsByName('calculator[fueltype]'),
    radioAgeClass = document.getElementsByName('calculator[age_class]'),
    radioImporter = document.getElementsByName('calculator[importer]');

//все поля с ошибками
let msgErrorAuctionPrice = document.querySelector('#msg-error_raw_cost'),
    msgErrorAuction = document.querySelector('#msg-error_auction'),
    msgErrorServiceType = document.querySelector('#msg-error_service_type'),
    msgErrorFuelType = document.querySelector('#msg-error_fuel_type'),
    msgErrorEngineVolume = document.querySelector('#msg-error_volume'),
    msgErrorEnginePower = document.querySelector('#msg-error_power'),
    msgErrorAgeClass = document.querySelector('#msg-error_age_class'),
    msgErrorImporter = document.querySelector('#msg-error_importer'),
    msgErrorDeclaredCost = document.querySelector('#msg-error_declared_cost');

//изначально скрываю все сообщения об ошибках
let allErrors = document.querySelectorAll('.form__msg');
allErrors.forEach(function(val) {
    val.style.display = 'none';
});


console.log(radioImporter);
let declaredCostDiv = document.querySelector('#declared_cost');
declaredCostDiv.style.display = 'none';
// if (radioImporter.checked.value === 'legal') {
//     declaredCostDiv.style.display = 'block';
// } else {
//     declaredCostDiv.style.display = 'none';
// }



// function onChangeServiceType(event) {
//     for (let i = 0; i < radioServiceType.length; i++) {
//         if (radioServiceType[i].checked) {
//             console.log('Тип услуги: ' + i);
//             break;
//         }
//     }
//
// }

// let radioServiceType = document.getElementsByName('calculator[service_type]');
// radioServiceType.onchange = function() {
//     for (let i = 0; i < radioServiceType.length; i++) {
//         if (radioServiceType[i].checked) {
//             console.log('Тип услуги: ' + i);
//             break;
//         }
//     }
// }

form.addEventListener('submit', (e) => {
    e.preventDefault();
});

function calcTotalCost() {
    // let totalCost;
    // resultText.textContent = totalCost;
}
