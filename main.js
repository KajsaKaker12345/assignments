import {assignments} from "./assignments.js";

const assignment1 = document.getElementById("assignment1");

assignment1.innerHTML = `<h1>${assignments[0].title}</h1><p>${assignments[0].description}</p><a href="../index.html">Till landningsidan</a>`;
console.log(assignment1);