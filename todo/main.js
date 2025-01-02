const form = document.getElementById("taskInfo")

async function addTask() {
    const formData =  new FormData(form);
    console.log(formData.get("description"));
    
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    addTask()
})
