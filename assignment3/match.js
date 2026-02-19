fetch("contestants.json")
.then(response => response.json())
.then(data => {

    const container = document.getElementById("turneringen");
    for (let i = 0; i < data.length; i += 2) {
    const match1 = new Match(data[i], data[i + 1]);
   
    container.append(match1.makeHTML());
}
});

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

        card.innerHTML = `<div><h3>${this.#contestant1.name}</h3><p>${this.#contestant1.catchphrase}</p><h4></div>VS<div></h4><h3>${this.#contestant2.name}</h3><p>${this.#contestant2.catchphrase}</p></div>`;

        return card;
    }
} 