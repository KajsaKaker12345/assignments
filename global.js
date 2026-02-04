import {assignments} from "./assignments.js";

// generera navigationen
export function createNavigation(subfold = true) {
const globalList = document.getElementById("list");

const currentPage = document.body.dataset.page;

for (const a of assignments) {
const li = document.createElement("li")
const link = document.createElement("a")
link.href = a.link;
link.textContent = a.title;
link.dataset.id = a.id;

if (subfold) {
    link.href = "../" + a.link;
}

if (a.id === currentPage) {
    link.classList.add("active");
    li.classList.add("active");
}

li.append(link);
globalList.append(li);
}
}