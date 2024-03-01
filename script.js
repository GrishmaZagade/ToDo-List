// Function to load tasks from local storage when the page loads
window.onload = function() {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(function(task) {
        addTaskToList(task.text);
    });
}

// Function to add task to the list
function addTaskToList(taskText) {
    var taskList = document.getElementById("taskList");
    var li = document.createElement("li");
    li.innerHTML = '<span>' + taskText + '</span><button class="delete-btn" onclick="deleteTask(this)">✖</button>';
    taskList.appendChild(li);
    li.classList.add("animate");
}

// Function to add a task
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        addTaskToList(taskText);

        // Retrieve tasks from local storage
        var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

        // Add new task to tasks array
        tasks.push({ text: taskText });

        // Store updated tasks array in local storage
        localStorage.setItem("tasks", JSON.stringify(tasks));

        taskInput.value = "";
    } else {
        alert("Please enter a task.");
    }
}

// Function to delete a task
function deleteTask(task) {
    var listItem = task.parentElement;
    var taskText = listItem.querySelector("span").innerText;

    // Retrieve tasks from local storage
    var tasks = JSON.parse(localStorage.getItem("tasks"));

    // Find index of task to be deleted
    var index = tasks.findIndex(function(task) {
        return task.text === taskText;
    });

    // Remove task from tasks array
    tasks.splice(index, 1);

    // Update tasks array in local storage
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Remove list item from the DOM
    listItem.classList.remove("animate");
    setTimeout(function() {
        listItem.remove();
    }, 300);
}
