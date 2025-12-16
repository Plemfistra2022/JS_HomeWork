// 1. Створити пустий масив та :
let arr = []
//     a. заповнити його 50 парними числами за допомоги циклу.
for (let i = 0; arr.length < 50; i++) {
    if (i % 2 === 0) {
        arr.push(i);
    }
}
console.log(arr);
//     b. заповнити його 50 непарними числами за допомоги циклу.
for (let i = 0; arr.length < 100; i++) {
    if (i % 2 !== 0) {
        arr.push(i);
    }
}
console.log(arr);
//     c. Заповнити масив 20-ма рандомними числами. (Google: Generate random number JS)
for (let i = 0; i < 20; i++) {
    let randomNumber = Math.floor(Math.random() * 101);
    arr.push(randomNumber);
}

console.log(arr);
//     d. Заповнити масив 20-ма рандомними числами в діапазоні від 8 до 732
//      (Google: Generate random number JS)
for (let i = 0; i < 20; i++) {
    let randomNumber = Math.floor(Math.random() * (732 - 8 + 1)) + 8;
    arr.push(randomNumber);
}

console.log(arr);
// 2. Вивести за допомогою console.log кожен третій елемент
for (let i = 2; i < arr.length; i += 3) {
    console.log(arr[i]);
}
// 3. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним.
for (let i = 2; i < arr.length; i += 3) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
}
// 4. Вивести за допомогою console.log кожен третій елемент,
// тільки якщо цей елемент є парним, та записати їх в новий масив
let newArray = [];
for (let i = 2; i < arr.length; i += 3) {
    if (arr[i] % 2 === 0) {
        newArray.push(arr[i]);
        console.log(arr[i]);
    }
}

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i+1] % 2 === 0) {
        console.log(arr[i]);
    }
}
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

// 6. Є масив з числами [100,250,50,168,120,345,188],
// Які характеризують вартість окремої покупки. Обрахувати середній чек.
let price = [100,250,50,168,120,345,188]
let sum = 0;
for (const number of price) {
    sum += number;
}
console.log(sum / price.length);
// 7. Створити масив з рандомними значеннями,
// помножити всі його елементи на 5 та перемістити їх в інший масив.
let randomarr = [];
let newrandomarr = [];
for (let i = 0; i < 10; i++) {
    randomarr.push(Math.floor(Math.random() * 100));
}
for (let num of randomarr) {
    newrandomarr.push(num*5);
}

console.log(newrandomarr);
// 8. Створити масив з будь-якими значеннями (стрінги, числа, і тд…).
// пройтись по ньому, і, якщо елемент є числом, додати його в інший масив.

let arrmix = [25, "hello", true, 3.14, false, "okten", 0, "JS", 100, null];
let newarrmix = [];
for (let i of arrmix) {
    if (typeof i === 'number') {
        newarrmix.push(i);
    }
}
console.log(newarrmix);
