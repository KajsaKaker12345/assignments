
export const cart = [];
export function addToCart(product) {
    const clickedProduct = cart.find(p => p.id === product.id)
    
    if (clickedProduct) {
        clickedProduct.count++
    }
    else {
    cart.push(product)
    }
    makeCart();
}
function makeCart() {
    const container = document.getElementById("section");

    container.innerHTML = "";
    let total = 0;
    const number = document.getElementById("h4")

    for (const c of cart) {
    total += c.price * c.count;

        const p = document.createElement("p");
        p.textContent = `${c.name}, ${c.price}kr, Antal:${c.count}`
        container.append(p);
        
    number.innerHTML = `Total: ${total}kr`;
    }
}