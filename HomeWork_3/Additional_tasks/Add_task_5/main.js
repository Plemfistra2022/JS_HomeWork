// Створити порожній масив.
// Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.

let arrzero = [];
arrzero[0] = 'abc';
arrzero[1] = 'qwe';
arrzero[2] = 'xyz';
arrzero[3] = true;
arrzero[4] = 33;
arrzero[5] = false;
arrzero[6] = -45;
arrzero[7] = NaN;
arrzero[8] = -23.9;
arrzero[9] = 'fff';
console.log(arrzero);
console.log('');

// Створити цикл for на 10  ітерацій з кроком 1.
// Вивести поточний номер кроку через console.log та document.write

for (let a  = 0; a < 10; a++) {
    console.log(a);
    document.write(`<div>${a}</div>`);
}
console.log('');
document.write(`<div>----</div>`);

// Створити цикл for на 100 ітерацій з кроком 1.
// Вивести поточний номер кроку через console.log та document.write

for (let b  = 0; b < 100; b++) {
    console.log(b);
    document.write(`<div>${b}</div>`);
}
console.log('');
document.write(`<div>----</div>`);

// Створити цикл for на 100 ітерацій з кроком 2.
// Вивести поточний номер кроку через console.log та document.write

for (let c  = 0; c < 100; c= c+2) {
    console.log(c);
    document.write(`<div>${c}</div>`);
}
console.log('');
document.write(`<div>----</div>`);

// Створити цикл for на 100 ітерацій.
// Вивести тільки парні кроки. через console.log + document.write

for (let d = 0; d < 100; d++) {
    if(d % 2 === 0) {
        console.log(d);
        document.write(`<div>${d}</div>`);
    }
}
console.log('');
document.write(`<div>----</div>`);

// Створити цикл for на 100 ітерацій.
// Вивести тільки непарні кроки. через console.log + document.write

for (let e = 0; e < 100; e++) {
    if(e % 2 !== 0) {
        console.log(e);
        document.write(`<div>${e}</div>`);
    }
}
console.log('');
document.write(`<div>----</div>`);