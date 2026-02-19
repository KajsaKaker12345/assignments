import { createNavigation } from "../global.js";
import { Match } from "./match.js";

createNavigation(true);

fetch("contestants.json")
.then(response => response.json())
.then(data => {
    console.log(data);
});