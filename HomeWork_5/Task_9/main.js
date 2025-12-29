// створити функцію, яка приймає масив об’єктів
// з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об’єкту окремий блок.

let users = arr =>{
    for(let user of arr){
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
    }
}
users([
    {id: 1, name: 'John', age: 12},
    {id: 2, name: 'Joe', age: 22},
    {id: 3, name: 'John', age: 32},
    {id: 4, name: 'Joe', age: 42},
    {id: 5, name: 'John', age: 42},
])