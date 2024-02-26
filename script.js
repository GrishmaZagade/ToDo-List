function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var li = document.createElement("li");
        li.innerHTML = '<span>' + taskInput.value + '</span><button class="delete-btn" onclick="deleteTask(this)">✖</button>';
        taskList.appendChild(li);
        taskInput.value = "";

        setTimeout(function() {
            li.classList.add("animate");
        }, 100);
    } else {
        alert("Please enter a task.");
    }
}

function deleteTask(task) {
    var listItem = task.parentElement;
    listItem.classList.remove("animate");
    setTimeout(function() {
        listItem.remove();
    }, 300);
}
