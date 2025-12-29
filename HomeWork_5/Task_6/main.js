// створити функцію, яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий

let tasks = li =>{
    document.write(`
    <ul>
        <li>${li}</li>
        <li>${li}</li>
        <li>${li}</li>
    </ul>
    `)
}
tasks("lorem ipsum")