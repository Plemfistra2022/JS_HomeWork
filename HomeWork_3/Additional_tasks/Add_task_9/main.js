// Взяти масив з 10 чисел або створити його.
// Вивести в консоль тільки ті елементи, значення яких є парними.

let arr_a = [34, 32, 89, 99, 66, 3, 2, 84, 92, 100]
for (const number of arr_a) {
    if (number % 2 === 0) {
        console.log(number);
    }
}



// Взяти масив з 10 чисел або створити його.
// Створити 2-й порожній масив.
// За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let arr_aa = [34, 32, 89, 99, 66, 3, 2, 84, 92, 100]
let arr_b = [];
for (const number of arr_aa) {
    arr_b.push(number);
}
console.log(arr_b);


// Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for зібрати всі букви в слово.

// let arr_abc = ['a', 'b', 'c'];
// let abc = '';
// for (let i = 0; i < arr_abc.length; i++) {
//     abc += arr_abc[i]
// }
// console.log(abc);


// Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу while зібрати всі букви в слово.

// let arr_abc = ['a', 'b', 'c'];
// let abc = '';
// let i = 0;
// while (i < arr_abc.length) {
//     abc += arr_abc[i];
//     i++;
// }
// console.log(abc);

// Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for of зібрати всі букви в слово.

let arr_abc = ['a', 'b', 'c'];
let abc = '';
for (let i of arr_abc) {
    abc += String(i);
}
console.log(abc);