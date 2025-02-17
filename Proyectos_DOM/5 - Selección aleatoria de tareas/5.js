document.getElementById("addTaskBtn").addEventListener("click", addTask);
document.getElementById("selectRandomBtn").addEventListener("click", selectRandomTask);

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Por favor, ingresa una tarea.");
        return;
    }

    let li = document.createElement("li");
    li.textContent = taskText;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}

function selectRandomTask() {
    let tasks = document.querySelectorAll("#taskList li");

    if (tasks.length === 0) {
        alert("No hay tareas en la lista.");
        return;
    }

    tasks.forEach(task => task.classList.remove("selected"));

    let randomIndex = Math.floor(Math.random() * tasks.length);
    tasks[randomIndex].classList.add("selected");
}
