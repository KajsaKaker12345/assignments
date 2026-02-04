import { assignments } from "./assignments.js";
// funktion skapa kort


export function createCards() {
    for (const a of assignments) {
        //skapandet av elementen
        const container = document.getElementById("assignments-cards");
        const div = document.createElement("div");
        div.classList.add("card");

        const h2 = document.createElement("h2");
        const link = document.createElement("a");
        link.href = a.link;
        link.textContent = a.title;
        const p = document.createElement("p");
        p.textContent = a.description;

        // lägga alla element där de ska va
        h2.append(link);
        div.append(h2);
        div.append(p);
        container.append(div);
    }
}