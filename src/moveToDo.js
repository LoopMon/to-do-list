import { moveToDoing } from "./moveToDoing"
import { removeElement } from "./removeElement"


export function moveToDo(element, count) {
    const toDoTask = document.querySelector(".to-do .tasks")
    const taskElement = element.querySelector("span").textContent

    element.innerHTML = `
        <span>${taskElement}</span>
        <img src="/lixeira.svg">
        <button class="r-${count}">&rArr;</button>
    `
    element.querySelector("button").addEventListener("click", () => {
        moveToDoing(element, count)
    })
    element.querySelector("img").onclick = () => {
        removeElement(element)
    }

    toDoTask.appendChild(element)
}