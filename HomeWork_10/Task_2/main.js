// створити сторінку з довільним блоком, в середині якого є значення “100грн”
// при перезавантаженні сторінки до значення додається по 10грн, але !!!
// зміна ціни відбувається тільки на перезавантаження,
// які відбулись пізніше ніж 10 секунд після попереднього.
// При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається

window.onload = function () {
    let now = Date.now();
    let priceList = JSON.parse(localStorage.getItem("priceList"));
    if (!priceList) {
        priceList = [{price: 100, date: now}];
        localStorage.setItem("priceList", JSON.stringify(priceList));
    }else{
        let lastItem = priceList[priceList.length - 1];
        let lastTime = lastItem.date;
        let diffTime = (now - lastTime)/1000;
        if (diffTime > 10) {
            let newPrice = lastItem.price + 10;
            priceList.push({price: newPrice, date: now});
            localStorage.setItem("priceList", JSON.stringify(priceList));
        }
    }
    let lastItem = priceList[priceList.length - 1];
    let price = lastItem.price;

    let div = document.createElement("div");
    div.innerText = price + " грн";
    document.body.appendChild(div);
}