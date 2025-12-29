// створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r
// S = 2πrh + 2πr² або S = 2πr(r + h)

let square = (radius, height) => 2 * Math.PI * radius * (radius + height);
console.log(square(3, 5));