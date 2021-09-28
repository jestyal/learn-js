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


// const a = {
//     "auction1": {
//         "Целый автомобиль": 100,
//     },
//     "auction2": {
//         "Распил рамный": 100,
//     },
// }

auction.addEventListener("change", (event) => {
    const servicesContainer = document.querySelector("#calculator_service_type");
    const services1 = ['Целый автомобиль', 'Распил легковой', 'Конструктор легковой'];
    const services2 = ['Распил рамный', 'Запчасти на палете'];

    //создаю блок с типом услуг
    let auctionValues = [];
    servicesContainer.innerHTML = "";

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

    function createServices(auctionValues) {
        for (let i = 0; i < auctionValues.length; i++) {
            let serviceTypeElement = document.createElement("div");
            serviceTypeElement.classList.add("form__radio");
            serviceTypeElement.innerHTML = '<label class="form__label"><input type="radio" class="input__radio" name="service_type" value="' + [i] + '" /> ' + auctionValues[i] + '</label>';
            servicesContainer.append(serviceTypeElement);


            let radioServiceType = serviceTypeElement.querySelector("input");
            radioServiceType.addEventListener("change", (event) => {
                const serviceTypeValue = radioServiceType.value;

                //прописываю цену конкретной услуге
                let serviceCost = 0;
                if(auctionType == 1 && serviceTypeValue == 0) {
                    serviceCost = 100;
                } else if(auctionType == 1 && serviceTypeValue == 1) {
                    serviceCost = 200;
                } else if(auctionType == 1 && serviceTypeValue == 2) {
                    serviceCost = 300;
                } else if(auctionType == 2 && serviceTypeValue == 0) {
                    serviceCost = 400;
                } else if(auctionType == 2 && serviceTypeValue == 1) {
                    serviceCost = 500;
                } else {
                    serviceCost = 1;
                }

                console.log(serviceCost)
                // return serviceCost;
            });
        }
    }
})


// блок с типом топлива
const engineVolumeBlock = document.querySelector("#engine_volume");
engineVolumeBlock.style.display = "none";
const enginePowerBlock = document.querySelector("#engine_power");
enginePowerBlock.style.display = "none";



const fuelTypeBlock = document.querySelector('#calculator_fuel_type');
const fuelTypes = ['бензин (включая гибрид)', 'дизельное топливо', 'электрический'];



function createFuelTypes () {
    for (let i = 0; i < fuelTypes.length; i++) {
        let fuelTypeElement = document.createElement("div");
        fuelTypeElement.classList.add("form__radio");
        fuelTypeElement.innerHTML = '<label class="form__label"><input type="radio" class="input__radio" name="fuel_type" value="' + [i] + '" /> ' + fuelTypes[i] + '</label>';

        let radioFuelType = fuelTypeElement.querySelector("input");
        radioFuelType.addEventListener("change", (event) => {
            const fuelValue = radioFuelType.value;
            engineVolumeBlock.style.display = "none";
            enginePowerBlock.style.display = "none";
            if(fuelValue == 0 || fuelValue == 1) {
                engineVolumeBlock.style.display = "block";
                enginePowerBlock.style.display = "block";
            } else if(fuelValue == 2) {
                enginePowerBlock.style.display = "block";
            }


            //прописываю цену конкретному типу топлива
            let fuelCost = 0;
            if(fuelValue == 0) {
                fuelCost = 2000;
            } else if(fuelValue == 1) {
                fuelCost = 3000;
            } else if(fuelValue == 2) {
                fuelCost = 1000;
            } else {
                fuelCost = 1;
            }
            console.log(fuelCost)
            // return fuelCost;


        })

        fuelTypeBlock.append(fuelTypeElement);
    }
}
createFuelTypes ();



//подсчет цены
const form = document.querySelector('#calculate-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let totalCost = 0;
    let resultText = document.querySelector('#result span');

    let auctionPriceValue = +document.querySelector('#calculator_raw_cost').value,
        engineVolumeValue = +document.querySelector("#engine_volume input").value,
        enginePowerValue = +document.querySelector("#engine_power input").value;


    totalCost = auctionPriceValue + engineVolumeValue + enginePowerValue;
    resultText.innerHTML = totalCost;
    console.log(totalCost);
})








