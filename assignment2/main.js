import { cart } from "./cart.js";
import { createNavigation } from "../global.js";
import { createCards } from "./productCard.js";
createNavigation(true);
createCards();

const number = document.getElementById("h4");
const container = document.getElementById("section");
const btn = document.getElementById("clear");
btn.addEventListener("click", () => {
    
    for (const c of cart) {
        c.count = 1;
    }
    cart.length = 0;
    container.innerHTML = "";
    number.innerHTML = "Total: 0";
})
