let cardSuit = ["spade", "diamond", "heart", "clubs"];
let value = ["6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];

let deckOfCards =[];
for (let card of cardSuit) {
    for (let element of value) {
        if (card === "spade" || card === "clubs") {
            deckOfCards.push({
                cardSuit: card,
                value: element,
                color: "black",
            });
        }else {
            deckOfCards.push({
                cardSuit: card,
                value: element,
                color: "red",
            });
        }
    }
}
console.log(deckOfCards);

console.log(deckOfCards.filter(card => card.cardSuit === "spade" && card.value === "ace"));
console.log(deckOfCards.filter(card => card.value === "6"));
console.log(deckOfCards.filter(card => card.color === "red"));
console.log(deckOfCards.filter(card => card.cardSuit === "diamond"));
console.log(deckOfCards.filter(card => {
    return (
    card.cardSuit === "clubs" && value.indexOf(card.value) > value.indexOf("8")
);
}));
