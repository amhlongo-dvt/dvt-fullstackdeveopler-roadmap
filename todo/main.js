const form = document.getElementById("taskInfo")
const search = document.querySelector(".search")
const titleInput = document.querySelector(".title-input")
const descriptionInput = document.querySelector(".description-input")
const addButton = document.querySelector(".add-btn")
const taskContainer = document.querySelector('#container')
const temp = document.getElementsByTagName("template")[0]




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
            description: formData.get("description"),
            done:false
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
        const checkbox =  clone.querySelector("input[type='checkbox']")
        const taskText = clone.querySelector(".task-text")
        checkbox.checked = element.done
        
        if(element.done){
            taskText.style.textDecoration = "line-through"
            taskText.style.opcaity = "0.6"
        }

        checkbox.addEventListener('change', (e) => {
            task_list.at(i).done = e.target.checked
            localStorage.setItem("taskList", JSON.stringify(task_list))

            if(e.target.checked){
                taskText.style.textDecoration = "line-through"
                taskText.style.opcaity = "0.6"
            }else {
                taskText.style.textDecoration = "none"
                taskText.style.opcaity = "1"
            }
        })

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

function searchItem(term){
    term = term.toLowerCase();
    console.log("searching");
    
    const items = document.querySelectorAll('.task')

    items.forEach(item => {
        const title = item.querySelector(".task-title").textContent.toLowerCase();
        
        if (title.includes(term)) {
            item.classList.remove("hidden");
        } else {
            item.classList.add("hidden");
        }
    });

}




renderTasks()