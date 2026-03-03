export class Match {
    #contestant1;
    #contestant2;
    #element;
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
    compete() {
        if (this.isPlayed)
            return;

        const skillLevel1 = this.#contestant1.skillLevel;
        const skillLevel2 = this.#contestant2.skillLevel;
        const chancesA = skillLevel1 / (skillLevel1 + skillLevel2);
        const random = Math.random();
        const players = this.#element.querySelectorAll(".contestant");

        if (random < chancesA) {
            this.#winner = this.#contestant1;
        } else {
            this.#winner = this.#contestant2;
        }
    
        if (this.#winner === this.#contestant1) {
            players[0].classList.add("win");
        } else {
            players[1].classList.add("win");
        }

    }

    makeHTML() {
        this.#element = document.createElement("div");
        this.#element.classList.add("match");
        const catchphrase1 = this.#contestant1.catchphrase ?? "Ingen vald catchphrase än";
        const catchphrase2 = this.#contestant2.catchphrase ?? "Ingen vald catchphrase än";

        this.#element.innerHTML = `<div class="contestant">
        <h3>${this.#contestant1.name}, level: ${this.#contestant1.skillLevel}</h3>
        <p>"${catchphrase1}"</p></div>
        <div class="VS">VS</div>
        <div class="contestant"><h3>${this.#contestant2.name}, level: ${this.#contestant2.skillLevel}</h3>
        <p>"${catchphrase2}"</p></div>`;

        return this.#element;
    }
} 