import { createNavigation } from "../global.js";
createNavigation(true);
import { Match } from "./match.js";

fetch("contestants.json")
.then(response => response.json())
.then(data => {

    const container = document.getElementById("turneringen");
    const round = document.createElement("div");
    round.classList.add("round");

    for (let i = 0; i < data.length; i += 2) {
    const match = new Match(data[i], data[i + 1]);
    round.append(match.makeHTML());
   

}
container.append(round);
});