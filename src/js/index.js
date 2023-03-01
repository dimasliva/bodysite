import { createCatalogs } from "./catalog/func.js";
import { createHits } from "./hits/func.js";
import { createNavbar } from "./navbar/func.js";

export function app() {
  let appendBlocks = [
    createNavbar(),
    createCatalogs(),
    createHits(),
  ] 
  const app = document.createElement("div")
  const container = document.createElement("div")

  app.setAttribute("id","app");
  container.classList.add("container")

  app.appendChild(container)
  appendBlock(container, appendBlocks)

  document.body.appendChild(app)
}
function appendBlock(currentDiv, blocks) {
  blocks.forEach(block => {
    currentDiv.append(block)
  });
}
document.body.onload = app()