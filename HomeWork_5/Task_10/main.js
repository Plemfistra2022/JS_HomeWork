// створити функцію, яка повертає найменше число з масиву

let minNum = arr =>{
    let num = 0;
    for(let i of arr){
        if(i < num){
            num = i;
        }
    }
    return num;
}
console.log(minNum([-22, 0, 5, 33, -77, 44]));