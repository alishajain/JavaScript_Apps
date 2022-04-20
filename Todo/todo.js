//Todo App
let task = document.getElementById("new_task");
let addBtn = document.querySelector("#add");
let output = document.getElementById("task_list");

function delTask(){
    console.log("task deleted");
}

function editTask(){
    console.log("task edited");
}

function getResult(){
    let li = document.createElement("li");
    let inputValue = task.value;
    let text = document.createTextNode(inputValue);
    
    li.appendChild(text);
    if(inputValue === "") {
        alert("Please write a task");
    } else {
        document.getElementById("task_list").appendChild(li);
    }
    task.value = '';

    let edit_btn = document.createElement("button");
    let del_btn = document.createElement("button");

    let edit = document.createTextNode("Edit");
    let del = document.createTextNode("Delete");

    edit_btn.className = "edit";
    del_btn.className = "close";

    edit_btn.appendChild(edit);
    del_btn.appendChild(del);

    li.appendChild(edit_btn);
    li.appendChild(del_btn);

    del_btn.addEventListener("click", delTask);
    edit_btn.addEventListener("click", editTask);
}

addBtn.addEventListener("click", getResult);