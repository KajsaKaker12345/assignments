import { createNavigation } from "../global.js";
createNavigation(true);
import { createRounds } from "./round.js";
let playingMatch = [];
const names = ["Kvartsfinal", "Semifinal", "Final"];
let currentRound = 0;
startGame();    

// Hämta contestants från fil json
function startGame() {
fetch("contestants.json")
    .then(response => response.json())
    .then(data => {


      // skapa första matcher med datan  
        playingMatch = createRounds(data, "Kvartsfinal");
        currentRound = 0;

    });}

    // knapp för att visa winner och skapa ny lista och anropa createRounds
const button = document.getElementById("btn");
button.addEventListener("click", () => {
    for (const match of playingMatch) {
        match.compete();
    }
    currentRound++;
    const winners = playingMatch.map(m => m.winner)
    playingMatch = createRounds(winners, names[currentRound]);

    if (playingMatch.length === 2) {
        button.textContent = "Simulera Semifinal"
    } 
    if (playingMatch.length === 1) {
        button.textContent = "Simulera Final"
    } else if (playingMatch.length === 0) {
        button.hidden = true;
        roundName = "";
    }
});
    // restartknapp
const restart = document.getElementById("startbtn");
restart.addEventListener("click", () => {
    button.hidden = false;
    const container = document.getElementById("turneringen");
    container.innerHTML = "";
    button.textContent = "Simulera Kvartsfinal"

    startGame();
});