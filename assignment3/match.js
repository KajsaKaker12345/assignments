export class Match {
    #contestant1;
    #contestant2;
    #winner;
    constructor(contestant1, contestant2) {
        this.#contestant1 = contestant1;
        this.#contestant2 = contestant2;
        this.#winner = null;
    }
    get contestant1() {
        return this.#contestant1;
    }

    get contestant2() {
        return this.#contestant2;
    }

    get winner() {
        return this.#winner;
    }
    get isPlayed() {
        return this.#winner !== null;
    }

    makeHTML() {
        const card = document.createElement("div");
        card.classList.add("match");
        const catchphrase1 = this.#contestant1.catchphrase ?? "Ingen vald catchphrase än";
        const catchphrase2 = this.#contestant2.catchphrase ?? "Ingen vald catchphrase än";

        card.innerHTML = `<div class="contestant">
        <h3>${this.#contestant1.name}, level: ${this.#contestant1.skillLevel}</h3>
        <p>"${catchphrase1}"</p></div>
        <div class="VS">VS</div>
        <div class="contestant"><h3>${this.#contestant2.name}, level: ${this.#contestant2.skillLevel}</h3>
        <p>"${catchphrase2}"</p></div>`;
        
        
        return card;
    }
} 