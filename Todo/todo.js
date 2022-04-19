//Todo App
let task = document.querySelector("#new_task");
let addBtn = document.querySelector("#add");
let output = document.getElementById("task_list");

function getResult(){
    console.log(task.value);
    output.innerHTML += task.value;

    let button = document.getElementById("buttons");

    let edit_btn = document.createElement("button");
    let del_btn = document.createElement("button");

    let edit = document.createTextNode("Edit");
    let del = document.createTextNode("Delete");

    edit_btn.appendChild(edit);
    del_btn.appendChild(del);

    button.appendChild(edit_btn);
    button.appendChild(del_btn);
}

addBtn.addEventListener("click", getResult);