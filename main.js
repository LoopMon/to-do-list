import "./src/style.css"
import { createTaskToDo } from "./src/createTask"


const input = document.querySelector(".input input")
const buttonAdd = document.querySelector(".input button")
const toDoTask = document.querySelector(".to-do-list .to-do .tasks")
let count = 1

buttonAdd.addEventListener("click", (event) => {
	event.preventDefault()
	if (input.value.length > 0) {
		const div = createTaskToDo(input.value, count)
		toDoTask.appendChild(div)
		
		input.value = ""
		count += 1
	}
})


