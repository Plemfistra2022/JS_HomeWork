// створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік,
// чи менше він за 18, та повідомити про це користувача

let button = document.getElementById("btn");

button.onclick = function(){
    let ageValue = document.getElementById("age").value;
    let age = Number(ageValue);

    if(age < 18){
        document.getElementById("result").textContent = "You are under 18. Access denied";
    }else{
        document.getElementById("result").textContent = "You are over 18. Welcome!";
    }
}
