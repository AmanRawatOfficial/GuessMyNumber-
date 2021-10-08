'use strict';

/* document.querySelector(".message").textContent = "🎉 Corrent Answer";
document.querySelector(".number").textContent = "13";
document.querySelector(".guess").value = "23";
console.log(document.querySelector(".guess").value); */



let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

function displayMessage(message) {
    document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function() {
    const guessedValue = Number(document.querySelector(".guess").value); 
    console.log(guessedValue);

    // If there is no Input
    if(!guessedValue) {
        displayMessage("⛔ Not a Number");

        // If the input is correct!
    } else if (guessedValue === secretNumber) {
        displayMessage("🎉 Corrent Answer");
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";

        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
        
        // If the input is Wrong!
    } else if (guessedValue !== secretNumber) {
        if (score > 1) {
            displayMessage(guessedValue > secretNumber ? "📈 Too High!" : "📉 Too Low!");
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            displayMessage("😓 Lost The Game");
            document.querySelector("body").style.backgroundColor = "red";
            document.querySelector(".score").textContent = 0;
        }
    }
    
    document.querySelector(".again").addEventListener("click", function() {
        score = 20;
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        displayMessage("Start geussing...");
        document.querySelector(".score").textContent = score;
        document.querySelector(".number").textContent = "?";
        document.querySelector(".guess").value = " ";
        document.querySelector("body").style.backgroundColor = "#222";
        document.querySelector(".number").style.width = "15rem";
    })
});