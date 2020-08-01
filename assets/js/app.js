// Selectors 
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// Event Listeners

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterToDo);

// Functions

function addTodo(event) {
        //Prevent form from submitting
    event.preventDefault();

        // Need to add function to prevent from submitting if input = false


        //todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
        // create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
        //Check mark button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("completed-btn");
    todoDiv.appendChild(completedButton);
        //Check trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
        //Append to list
    todoList.appendChild(todoDiv);
        //Clear todoInput value
    todoInput.value = "";
}

function deleteCheck(event) {
    const item = event.target;

        // Delete Todo
    if(item.classList[0] == "trash-btn") {
        const todo = item.parentElement;
            // Animation
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function () {
            todo.remove();
        })
    }

        // Check Mark
    if(item.classList[0] == "completed-btn") {
        item.parentElement.classList.toggle("completed");
    }
}

    // Filter
function filterToDo (event) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        switch(event.target.value) {
            case "all" :
                todo.style.display = "flex";
                break;
            case "completed" :
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex" ;
                } else {
                    todo.style.display ="none";
                }
            case "uncompleted" :
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex" ;
                } else {
                    todo.style.display ="none";
                }
        }
    });
}