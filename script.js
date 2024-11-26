const taskInput = document.getElementById("taskinput")
const addTaskBtn = document.getElementById("addTaskBtn")
const taskList = document.getElementById("taskList")
console.log(taskList)

// Add a task
addTaskBtn.addEventListener("click",()=>{
    const taskText = taskInput.value
    if(taskText===""){
        alert("Please write some text")
    }
    const li = document.createElement("li")//create a new list item
   li.textContent = taskText

//    Add delete button
const deleteBtn = document.createElement("button")
deleteBtn.textContent = "Delete"
deleteBtn.addEventListener("click",()=>{
    li.remove()
})

// Mark as completed
li.addEventListener("click",()=>{
    li.classList.toggle("completed")
})

li.appendChild(deleteBtn)
taskList.appendChild(li)
taskInput.value = ""
})

