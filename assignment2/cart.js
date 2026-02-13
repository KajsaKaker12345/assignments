const number = document.getElementById("h4");
const container = document.getElementById("section");
const btn = document.getElementById("clear");
export const cart = [];

// spara kundkorgen
const saved = localStorage.getItem("cart");
if (saved) {
    const parsed = JSON.parse(saved);
    
    for (const p of parsed) {
        cart.push(p);
    }
    makeCart();
}
// lägg till i korgen
export function addToCart(product) {
    const clickedProduct = cart.find(p => p.id === product.id)
    
    if (clickedProduct) {
        clickedProduct.count++
    }
    else {
    cart.push(product)
    }
    saveCart();
    makeCart();
}
// skapa korg
function makeCart() {

    container.innerHTML = "";
    let total = 0;

    for (const c of cart) {
    total += c.price * c.count;

        const p = document.createElement("p");
        p.textContent = `${c.name}, ${c.price}kr, Antal:${c.count}`
        container.append(p);
    }
    number.innerHTML = `Total: ${total}kr`;
}
//spara innehållet korgen
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

//Töm hela varukorgen 
btn.addEventListener("click", () => {
    
    for (const c of cart) {
        c.count = 1;
    }
    cart.length = 0;
    localStorage.removeItem("cart");
    makeCart();
    container.innerHTML = "";
    number.innerHTML = "Total: 0";
});