let product;
let products = [];

let productSelect = document.querySelector("#products");
let productAmountInput = document.querySelector("#amount");

function createProductObject() {
    let productPrice = productSelect.options[productSelect.selectedIndex].value;
    let productTitle = productSelect.options[productSelect.selectedIndex].text;
    let productAmount = productAmountInput.value;

    product = {
        "title": productTitle,
        "price": productPrice,
        "amount": productAmount,
        "totalPrice": productPrice * productAmount,
    };

    products.push(product);

    render();

    let totalAmount = 0;
    for (let i = 0; i < products.length; i++) {
        totalAmount += +products[i].amount;
    }
    let totalPrice = 0;
    for (let i = 0; i < products.length; i++) {
        totalPrice += +products[i].totalPrice;
    }

    let totalPriceBlock = document.querySelector(".total-price");
    totalPriceBlock.innerText = `Всего: ${totalAmount} позиции, ${totalPrice} руб.`;



    let saleBlock = document.querySelector("#sale-block");
    let saleInput = document.querySelector("#sale-input");
    if(totalPrice >= 1000) {
        saleBlock.style.display = "block";
    }
    document.addEventListener("change", () => {
        if(saleInput.checked) {
            totalPriceBlock.innerHTML = `Всего: ${totalAmount} позиции,  <span class="price-old">${totalPrice}</span> ${totalPrice - (totalPrice * 0.1)} руб.`;
        } else {
            totalPriceBlock.innerText = `Всего: ${totalAmount} позиции, ${totalPrice} руб.`;
        }
    })

    console.log(products);

    let expensiveProductBlock = document.querySelector(".expensive-product");
    function findExpensiveProduct(){

    }
    // products.find()

}

function render() {
    let cardBlock = document.querySelector(".card");
    cardBlock.innerHTML = "";

    function renderItemInfo(cardItem, product, parameter, className, text) {
        let cardInfo = document.createElement("div");
        cardInfo.classList.add(className);
        cardInfo.innerText = text + ": " + product[parameter];
        cardItem.append(cardInfo);
    }

    for (let i = 0; i < products.length; i++) {
        let cardItem = document.createElement("div");
        cardItem.classList.add("card__item");
        cardBlock.append(cardItem);

        renderItemInfo(cardItem, products[i], "title", "card__title", "Товар");
        renderItemInfo(cardItem, products[i], "amount", "card__amount", "Количество");
        renderItemInfo(cardItem, products[i], "price", "card__price", "Цена за шт.");
        renderItemInfo(cardItem, products[i], "totalPrice", "card__total-price", "Итоговая стоимость");

        deleteProduct(cardItem, i);
    }
}

function deleteProduct(cardItem, i) {
    let deleteItemBtn = document.createElement("div");
    deleteItemBtn.classList.add("btn");
    deleteItemBtn.innerText = "Удалить";
    cardItem.append(deleteItemBtn);

    deleteItemBtn.addEventListener("click", () => {
        products.splice(i, 1);
        console.log(products);
    })
}