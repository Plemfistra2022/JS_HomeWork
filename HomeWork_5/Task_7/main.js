// створити функцію, яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let tasks = (li, num) =>{
    document.write(`<ul>`);
    for(let i = 0; i < num; i++){
        document.write(`<li>${li}</li>`);
    }
    document.write(`</ul>`);
}
tasks("lorem ipsum", 7);