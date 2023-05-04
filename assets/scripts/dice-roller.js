// Dice roll
const diceButton = document.getElementById("dice-button");

// Event-listener on diceButton
diceButton.addEventListener("click",
    function () {

        let player1 = Math.floor(Math.random() * 6) + 1;

        let player2 = Math.floor(Math.random() * 6) + 1;

        let result = "Giocatore 1 ha tirato: " + player1 + "<br>Giocatore 2 ha tirato: " + player2 + "<br>";

        if (player1 > player2) {
            result += "Vince il giocatore 1!";
        } else if (player2 > player1) {
            result += "Vince il giocatore 2!";
        } else {
            result += "Parità!";
        }
        document.getElementById("result").innerHTML = result;

        // Dice player 1 display
        const dice1 = document.getElementById("dice-1");
        
        if (player1 === 1) {
            dice1.innerHTML = "<img src=\"img/dice-1.png\" id=\"dice-img\">";
        } else if (player1 === 2) {
            dice1.innerHTML = "<img src=\"img/dice-2.png\" id=\"dice-img\">";
        } else if (player1 === 3) {
            dice1.innerHTML = "<img src=\"img/dice-3.png\" id=\"dice-img\">";
        } else if (player1 === 4) {
            dice1.innerHTML = "<img src=\"img/dice-4.png\" id=\"dice-img\">";
        } else if (player1 === 5) {
            dice1.innerHTML = "<img src=\"img/dice-5.png\" id=\"dice-img\">";
        } else {
            dice1.innerHTML = "<img src=\"img/dice-6.png\" id=\"dice-img\">";
        }

        // Dice player 2 display
        const dice2 = document.getElementById("dice-2");

        if (player2 === 1) {
            dice2.innerHTML = "<img src=\"img/dice-1.png\" id=\"dice-img\">";
        } else if (player2 === 2) {
            dice2.innerHTML = "<img src=\"img/dice-2.png\" id=\"dice-img\">";
        } else if (player2 === 3) {
            dice2.innerHTML = "<img src=\"img/dice-3.png\" id=\"dice-img\">";
        } else if (player2 === 4) {
            dice2.innerHTML = "<img src=\"img/dice-4.png\" id=\"dice-img\">";
        } else if (player2 === 5) {
            dice2.innerHTML = "<img src=\"img/dice-5.png\" id=\"dice-img\">";
        } else {
            dice2.innerHTML = "<img src=\"img/dice-6.png\" id=\"dice-img\">";
        }
    }
);