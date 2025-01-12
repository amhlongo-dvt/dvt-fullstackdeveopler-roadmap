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
    let task_list = JSON.parse(localStorage.getItem("taskList"))


    if(formData.get("title")==""){
        window.alert("Please enter a title")
        return
    }
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

    localStorage.setItem("taskList", JSON.stringify(task_list))
    titleInput.value = ""
    descriptionInput.value = ""

}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    addTask()
    renderTasks()
    
})

function editTask(index){
    let task_list = JSON.parse(localStorage.getItem("taskList"))
    let  selectedTask = task_list.at(index)
    titleInput.value = selectedTask.title
    descriptionInput.value = selectedTask.description
    addButton.value = "Edit"
    form.setAttribute("id", index)
}

function renderTasks(){
    taskContainer.innerHTML = ""
    let task_list = []
    if(localStorage.getItem("taskList")){
        task_list = JSON.parse(localStorage.getItem("taskList"))
    }
    task_list.forEach((element,i) => {
        console.log(element.title);
        const clone = temp.content.cloneNode(true)
        clone.querySelector(".task-title").textContent = element.title
        clone.querySelector(".task-desc").textContent = element.description
        
        
        const deleteButton = clone.querySelector(".delete-button")
        deleteButton.addEventListener('click', (e) => {
            e.target.closest('.task').remove()
            task_list.splice(i, 1)
            console.log(task_list);
            localStorage.setItem("taskList", JSON.stringify(task_list))
        })
        const editButton = clone.querySelector(".edit-button")
        editButton.addEventListener('click', (e) => {
            editTask(i)
        })
        
        taskContainer.appendChild(clone)
    })

    localStorage.setItem("taskList", JSON.stringify(task_list))
}


renderTasks()