// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:’USD’,value:25},{currency:’EUR’,value:42}],’USD’) // => 400

function exchange(sumUAH,currencyValues,exchangeCurrency){
    for(let i=0; i<currencyValues.length; i++){
        if(currencyValues[i].currency === exchangeCurrency){
            return sumUAH / currencyValues[i].value;
        }
    }
}
console.log(exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD'))