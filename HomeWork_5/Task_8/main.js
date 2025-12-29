// створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список

let tasks = array =>{
    document.write(`<ul>`);
    for(let i = 0; i < array.length; i++){
        document.write(`<li>${array[i]}</li>`);
    }
    document.write(`</ul>`);
}

tasks(["lorem ipsum", 7, true, 33, 'lorem ipsum', false, undefined, 1]);