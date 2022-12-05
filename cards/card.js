// JavaScript source code
let total = 0;
let playingCards = [];
let deck = [];
let drawCardBtn = document.querySelector('#draw-card-btn');
let resultEl = document.querySelector('#result-el');

function startGame() {

    for (let i = 1; i <= 52; i++) {

        deck.push(i);

    }

    playingCards = [generateRandomCard(), generateRandomCard()];
    total = findValue(playingCards[0]) + findValue(playingCards[1]);
    resultEl.textContent = "";
    drawCardBtn.style.display = "inline";
    resultEl.textContent = "Keep Going";
    display();

}

function findValue(playingCard) {

    playingCard = (playingCard % 13) + 1;
    if (playingCard == 1) {
        return 11;
    }

    else if (playingCard > 10) {
        return 10;
    }

    else {
        return playingCard;
    }

}

function generateRandomCard() {

    let index = Math.floor(Math.random() * deck.length);
    deck.splice(index, 1);
    return index;

}

function drawCard() {

    let newCard = generateRandomCard();
    total += findValue(newCard);
    playingCards.push(newCard);
    display();

}

function displayResult() {

    let resultEl = document.querySelector("#result-el");

    if (total == 21) {

        resultEl.textContent = "Winner!";
        drawCardBtn.style.display = "none";

    }

    else if (total > 21) {

        resultEl.textContent = "Loser!";
        drawCardBtn.style.display = "none";

    }
}

function displayTotal() {

    let totalEl = document.querySelector("#total-el");
    totalEl.textContent = "Total: " + total;

}

function displayplayingCards() {

    let playingCardEl = document.querySelector("#playingCard-el");
    playingCardEl.textContent = " Cards: ";
    for (let i = 0; i < playingCards.length; i++) {

        let card = (playingCards[i] % 13) + 1;
        playingCardEl.textContent += card + " ";

    }

}

function display() {

    displayResult();
    displayTotal();
    displayplayingCards();

}