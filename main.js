import {createNavigation} from "./global.js";
import { assignments } from "./assignments.js";
console.log(createNavigation);

const container = document.getElementById("assignment");
const assignment = assignments.find(assignments => assignments.id === "assignment1" );
const h1 = document.createElement("h1");
const p = document.createElement("p");
const link = document.createElement("a");

h1.textContent = assignment.title;
p.textContent = assignment.description;
link.href = "../index.html";
link.textContent = "Tillbaka till startsidan!"
container.append(h1, p, link );