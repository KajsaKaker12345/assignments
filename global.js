import {assignments} from "./assignments.js";
const global = document.getElementById("global");

global.innerHTML = `<a href="${assignments[0].link}">${assignments[0].title}</a>`;