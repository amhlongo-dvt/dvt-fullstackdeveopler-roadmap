const form = document.getElementById("taskInfo")
const search = document.querySelector(".search")
const titleInput = document.querySelector(".title-input")
const descriptionInput = document.querySelector(".description-input")
const addButton = document.querySelector(".add-btn")
const taskContainer = document.querySelector('#container')
const temp = document.getElementsByTagName("template")[0]

let task_list = [
    {
        title: "Exercise",
        description: "Lift rocks and lurk for humans"
    },
    {
        title: "Make Bed",
        description: "Make bed and place all cushions in the right place"
    },
]

async function addTask() {
    const id = taskContainer.children.length
    const formData =  new FormData(form);
    
    if(addButton.value== "Edit"){
        const id = Number(form.getAttribute("id"))
        const task = task_list.at(id)
        task.title = formData.get("title") 
        task.description = formData.get("description") 
        addButton.value = "Add"
    }else{     
        let task = {
            title: formData.get("title"),
            description: formData.get("description")
        }
        task_list.push(task);
    }

    titleInput.value = ""
    descriptionInput.value = ""

}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    addTask()
    renderTasks()
    
})

function editTask(index){
    let  selectedTask = task_list.at(index)
    titleInput.value = selectedTask.title
    descriptionInput.value = selectedTask.description
    addButton.value = "Edit"
    form.setAttribute("id", index)
}

function renderTasks(){
    taskContainer.innerHTML = ""
    task_list.forEach((element,i) => {
        console.log(element.title);
        const clone = temp.content.cloneNode(true)
        clone.querySelector(".task-title").textContent = element.title
        clone.querySelector(".task-desc").textContent = element.description
        
        
        const deleteButton = clone.querySelector(".delete-button")
        deleteButton.addEventListener('click', (e) => {
            e.target.closest('.task').remove()
            task_list.splice(i, 1)
        })
        const editButton = clone.querySelector(".edit-button")
        editButton.addEventListener('click', (e) => {
            editTask(i)
        })
        
        taskContainer.appendChild(clone)
    })
}


renderTasks()