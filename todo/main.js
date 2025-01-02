const form = document.getElementById("taskInfo")
const taskContainer = document.querySelector('#container')


async function addTask() {
    const formData =  new FormData(form);
 
    const task = document.createElement("div")
    const taskTitle = document.createElement("h3")
    const taskDescription = document.createElement("p")
    const buttonContainer = document.createElement("div")
    const editButton = document.createElement("button")
    const doneButton = document.createElement("button")
    
    task.setAttribute('class', 'task')
    taskTitle.setAttribute('class', 'task-title')
    taskDescription.setAttribute('class', 'task-description')
    buttonContainer.setAttribute('class', 'btn-container')
    editButton.setAttribute('class', 'edit-btn')
    doneButton.setAttribute('class', 'done-btn')

    taskTitle.textContent = formData.get("title")
    taskDescription.textContent = formData.get("description")
    editButton.textContent = "Edit"
    doneButton.textContent = "Done"
    
    task.appendChild(taskTitle)
    task.appendChild(taskDescription)
    buttonContainer.appendChild(editButton)
    buttonContainer.appendChild(doneButton)
    task.appendChild(buttonContainer)

    doneButton.addEventListener('click', () => {
       task.remove() 
    })

    taskContainer.appendChild(task)

}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    addTask()
})


