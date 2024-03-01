function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var taskText = taskInput.value.trim(); // Get task text

        // Create task object
        var taskObject = {
            text: taskText
        };

        // Get existing tasks from local storage or initialize as empty array
        var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

        // Add new task object to tasks array
        tasks.push(taskObject);

        // Store updated tasks array in local storage
        localStorage.setItem("tasks", JSON.stringify(tasks));

        // Create and append list item for the task
        var li = document.createElement("li");
        li.innerHTML = '<span>' + taskText + '</span><button class="delete-btn" onclick="deleteTask(this)">✖</button>';
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
