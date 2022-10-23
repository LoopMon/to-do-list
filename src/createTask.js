import { moveToDoing } from "./moveToDoing"
import { removeElement } from "./removeElement"


export function createTaskToDo(task, count) {
    const element = document.createElement("div")
    element.innerHTML = `
        <span>${task}</span>
        <img src="/lixeira.svg">
        <button class="r-${count}">&rArr;</button>
    `
    element.querySelector("button").addEventListener("click", () => {
        moveToDoing(element, count)
    })

    element.querySelector("img").onclick = () => {
        removeElement(element)
    }

    return element
}