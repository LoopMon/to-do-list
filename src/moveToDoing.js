import { moveToDo } from "./moveToDo"
import { moveToDone } from "./moveToDone"
import { removeElement } from "./removeElement"


export function moveToDoing(element, count) {
    const doingTask = document.querySelector(".doing .tasks")
    const taskElement = element.querySelector("span").textContent

    element.innerHTML = `
    <button class="l-${count}">&lArr;</button>
    <span>${taskElement}</span>
    <img src="/lixeira.svg" onclick="removeElement(${element})">
    <button class="r-${count}">&rArr;</button>
    `

    element.querySelector(`button.l-${count}`).addEventListener("click", () => {
        moveToDo(element, count)
    })
    element.querySelector(`button.r-${count}`).addEventListener("click", () => {
        moveToDone(element, count)
    })
    element.querySelector("img").onclick = () => {
        removeElement(element)
    }

    doingTask.appendChild(element)
}