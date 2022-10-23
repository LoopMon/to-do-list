import { moveToDoing } from "./moveToDoing"
import { removeElement } from "./removeElement"


export function moveToDone(element, count) {
    const doneTask = document.querySelector(".done .tasks")
    const taskElement = element.querySelector("span").textContent

    element.innerHTML = `
    <button class="l-${count}">&lArr;</button>
    <span>${taskElement}</span>
    <img src="/lixeira.svg" onclick="removeElement(${element})">
    `
    
    element.querySelector(`button.l-${count}`).addEventListener("click", () => {
        moveToDoing(element, count)
    })
    element.querySelector("img").onclick = () => {
        removeElement(element)
    }

    doneTask.appendChild(element)
}