// створити функцію sum(arr), яка приймає масив чисел,
// сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

let sumCalc = arr =>{
    let sum = 0;
    for(let i of arr){
        sum += i;
    }
    return sum;
}

console.log(sumCalc([1,2,3,4,5]));