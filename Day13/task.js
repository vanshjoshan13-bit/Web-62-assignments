"use strict";

const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const statusMessage = document.getElementById("status");
const statistics = document.getElementById("statistics");

// Task data for this initial working version
let tasks = [];
let nextId = 1;

// Add a task
taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = taskInput.value.trim();

    if (title === "") {
        statusMessage.textContent = "Please enter a task.";
        return;
    }

    const task = {
        id: nextId++,
        title: title,
        completed: false
    };

    tasks.push(task);
    taskInput.value = "";

    statusMessage.textContent = "Task added successfully.";
    renderTasks();
});

// Render all tasks
function renderTasks() {
    taskList.replaceChildren();

    tasks.forEach(function (task) {
        const item = document.createElement("li");

        if (task.completed) {
            item.classList.add("completed");
        }

        // Checkbox for completion
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.setAttribute(
            "aria-label", "Complete task: " + task.title
        );

        checkbox.addEventListener("change", function () {
            task.completed = checkbox.checked;

            statusMessage.textContent = task.completed
                ? "Task completed."
                : "Task marked as pending.";

            renderTasks();
        });

        // Task title
        const title = document.createElement("span");
        title.className = "task-title";
        title.textContent = task.title;

        // Delete button
        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.className = "delete-btn";
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function () {
            tasks = tasks.filter(function (entry) {
                return entry.id !== task.id;
            });

            statusMessage.textContent = "Task deleted.";
            renderTasks();
        });

        item.append(checkbox, title, deleteButton);
        taskList.appendChild(item);
    });

    const completedCount = tasks.filter(function (task) {
        return task.completed;
    }).length;

    statistics.textContent =
        "Total tasks: " + tasks.length +
        " | Completed: " + completedCount +
        " | Pending: " + (tasks.length - completedCount);

    if (tasks.length === 0) {
        const emptyItem = document.createElement("li");
        emptyItem.textContent = "No tasks yet. Add your first task!";
        taskList.appendChild(emptyItem);
    }
}

// Initial display
renderTasks();