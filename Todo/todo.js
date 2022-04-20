//Todo App
let task = document.getElementById("new_task");
let addBtn = document.querySelector("#add");
let output = document.getElementById("task_list");
let addBtn_value = "add";
function delTask(e){
    console.log("task deleted");
    if(e.target.classList.contains("close")){
        let li = e.target.parentNode;
        task_list.removeChild(li);
    }
}

function editTask(e){
    console.log("task edited");
    addBtn_value = "edit";

    if(e.target.classList.contains("edit")) {
        let edited = e.target.parentNode.childNodes[0].data;
        task.value = edited;
        if(addBtn_value === "edit"){
        addBtn.onclick = function change(){
        e.target.parentNode.childNodes[0].data = task.value;
        task.value = '';
        addBtn_value = "add";
        }
        } 
    }
}

function getResult(){
    if(addBtn_value === "add"){

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
}

addBtn.addEventListener("click", getResult);