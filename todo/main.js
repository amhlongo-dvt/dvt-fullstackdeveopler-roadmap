

const form = document.getElementById("taskInfo")
const taskContainer = document.querySelector('#container')


async function addTask() {
    const id = taskContainer.children.length
    const formData =  new FormData(form);

    if(form.children.item(4).value== "Edit"){
        console.log("Im editting");

        const id = Number(form.getAttribute("id"))
        const task = taskContainer.children.item(id)
        task.children.item(0).textContent = formData.get("title") 
        task.children.item(1).textContent = formData.get("description") 

        console.log(id)
        form.children.item(4).value = "Add"
         
        
    }else{
     
        const task = document.createElement("div")
        const taskTitle = document.createElement("h3")
        const taskDescription = document.createElement("p")
        const buttonContainer = document.createElement("div")
        const editButton = document.createElement("button")
        const doneButton = document.createElement("button")
        
        task.setAttribute('class', 'task')
        task.setAttribute('id', id)
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
    
        editButton.addEventListener('click',()=>{
            editTask(id)
        })
    
        taskContainer.appendChild(task)
    }

}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    addTask()
})

function editTask(index){
    const task = document.getElementById(index)
    form.children.item(1).value = task.children.item(0).textContent
    form.children.item(3).value = task.children.item(1).textContent
    form.children.item(4).value = "Edit"
    form.setAttribute("id", index)
    console.log(task);
    
}


