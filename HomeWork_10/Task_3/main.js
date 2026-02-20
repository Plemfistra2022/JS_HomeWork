// зробити масив на 100 об’єктів та дві кнопки prev next
// при завантаженні сторінки з’являються перші 10 об’єктів.
// При натисканні next виводяться наступні 10 об’єктів
// При натисканні prev виводяться попередні 10 об’єктів

let objArray = []

for (let i = 0; i < 100; i++) {
    let id = i + 1;
    let item = `elem ${id}`
    let obj = {id: id, name: item}
    objArray.push(obj);
}

let container = document.createElement("div");
let btn_prev = document.createElement("button");
btn_prev.innerText = "PREV";
let btn_next = document.createElement("button");
btn_next.innerText = "NEXT";
document.body.append(container, btn_prev, btn_next);

let itemsPerPage = 10;
let currentPage = 1;

function render(){
    let startIndex = (currentPage - 1) * itemsPerPage;
    let endIndex = startIndex + itemsPerPage;
    container.innerHTML = '';
    for (let i = startIndex; i < endIndex; i++) {
        let p = document.createElement("p");
        p.innerText = objArray[i].name;
        container.appendChild(p);
    }
}
render();

btn_next.addEventListener("click", function(){
    if (currentPage < 10) {
        currentPage++;
        render();
    }
});
btn_prev.addEventListener("click", function(){
    if (currentPage > 1) {
        currentPage--;
        render();
    }
});