import { Match } from "./match.js";

// skapa matcher
export function createRounds(data) {
    const matches = [];
    const container = document.getElementById("turneringen");
    const round = document.createElement("div");
    round.classList.add("round");

    for (let i = 0; i < data.length - 1; i += 2) {
        const match = new Match(data[i], data[i + 1]);
        round.append(match.makeHTML());
        matches.push(match);
    }
    container.append(round);
    return matches;
}