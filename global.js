import {assignments} from "./assignments.js";

// generera navigationen
export function createNavigation() {
const globalList = document.getElementById("list");

if (!globalList) return;

for (const a of assignments) {
const li = document.createElement("li")
const link = document.createElement("a")
link.href = a.link;
link.textContent = a.title;

li.append(link);
globalList.append(li);
}
}

createNavigation();
