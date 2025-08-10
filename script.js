let input = document.getElementById("input");
let btn = document.getElementById("add-btn");
let ul = document.getElementById("Todos");

btn.addEventListener("click", addTodoFunction);

function addTodoFunction() {
    let inputData = input.value;
    if (inputData.length < 1) {  
        return alert("Empty inputs are not allowed");
    }

    let liTag = document.createElement("li");
    liTag.className = "p-2 border border-green-600 rounded-lg bg-green-100 text-green-800 flex justify-between";

    let deleteBtn = document.createElement("button");
    deleteBtn.className = "text-red-500 text-sm cursor-pointer";
    deleteBtn.id = "delete-btn";
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function() {
        liTag.remove();
    });

    liTag.textContent = inputData;
    liTag.appendChild(deleteBtn);
    ul.appendChild(liTag);
}