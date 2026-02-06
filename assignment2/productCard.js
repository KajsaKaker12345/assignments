import { products } from "./products.js";

export function createCards() {
    for (const product of products) {
    const section = document.getElementById("product");
    const div = document.createElement("div");
    div.classList.add("div");
    const img = document.createElement("img");
    const h1 = document.createElement("h1");
    const price = document.createElement("h3");
    const p = document.createElement("p");
    const category = document.createElement("li");
    const button = document.createElement("button");
    
    img.src = product.image;
    img.alt = product.name;
    h1.textContent = product.name;
    price.textContent = `Pris: ${product.price}kr`;
    p.textContent = product.description;
    category.textContent = product.category;
    button.textContent = "Lägg i kundvagn";
    
    div.append(img, h1, price, p, category, button);
    section.append(div);
    
    }
}