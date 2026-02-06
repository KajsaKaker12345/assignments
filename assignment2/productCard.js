import { products } from "./products.js";

export function createCards() {
    for (const product of products) {
    const section = document.getElementById("product");
    const div = document.createElement("div");
    div.classList.add("product");
    const img = document.createElement("img");
    const h1 = document.createElement("h1");
    const price = document.createElement("h3");
    const p = document.createElement("p");
    const category = document.createElement("li");
    
    img.src = product.image;
    img.alt = product.name;
    h1.textContent = product.name;
    price.textContent = `Pris: ${product.price}`;
    p.textContent = product.description;
    category.textContent = product.category;

    div.append(img, h1, price, p, category);
    section.append(div);
    
    }
}