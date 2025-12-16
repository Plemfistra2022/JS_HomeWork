// Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let arrnum = [1, 7, -9, 23, 25, 77, -333, 69, -39, 22]
for (let i = 0; i < arrnum.length; i++) {
    console.log(arrnum[i])
}
console.log('');
// Створити масив з 10 строкових елементів. Вивести в консоль всі його елементи в циклі.
let arrstr = ['abc', 'qwe', 'asd', 'rty', 'klj', 'ljg', 'ldn', 'nmv', 'yfh', 'ndh'];
let a = 0;
while (a < arrstr.length) {
    console.log(arrstr[a]);
    a++;
}
console.log('');
// Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arrmix = ['abc',true, 22, 'qwe', null, 'asd', false, 'klj', 3.14, NaN];
for (let b = 0; b < arrmix.length; b++) {
    console.log(arrmix[b]);
}
console.log('');
// Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки булеві елементи

let arrbool = ['abc',true, 22, 'qwe', null, 'asd', false, 'klj', 3.14, NaN];
for (let c = 0; c < arrbool.length; c++) {
    if (typeof (arrbool[c]) === "boolean" ) {
        console.log(arrbool[c]);
    }
}
console.log('');

// Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки числові елементи

let arrsb = ['abc',true, 22, 'qwe', null, 'asd', false, 'klj', 3.14, NaN];
for (let d = 0; d < arrsb.length; d++) {
    if (typeof (arrsb[d]) === "boolean" || typeof (arrsb[d]) === "string") {
        console.log(arrsb[d]);
    }
}
console.log('');

// Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки рядкові елементи

let arrstring = ['abc',true, 22, 'qwe', null, 'asd', false, 'klj', 3.14, NaN];
for (let e = 0; e < arrstring.length; e++) {
    if (typeof (arrstring[e]) === "string" ) {
        console.log(arrstring[e]);
    }
}