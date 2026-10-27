// Student Task Manager: release candidate

const STORAGE_KEY = "studentTaskManagerDay14";

const taskForm = document.getElementById("taskForm");
const taskTitle = document.getElementById("taskTitle");
const taskList = document.getElementById("taskList");
const taskFilter = document.getElementById("taskFilter");
const formHeading = document.getElementById("formHeading");
const saveButton = document.getElementById("saveButton");
const cancelButton = document.getElementById("cancelButton");
const formMessage = document.getElementById("formMessage");
const listMessage = document.getElementById("listMessage");
const emptyMessage = document.getElementById("emptyMessage");

let tasks = loadTasks();
let editingId = null;

// Read saved tasks safely.
function loadTasks() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) return [];

    const data = JSON.parse(saved);

    if (!Array.isArray(data)) return [];

    // Ignore invalid records in saved data.
    return data.filter(task =>
      task &&
      Number.isInteger(task.id) &&
      typeof task.title === "string" &&
      typeof task.completed === "boolean"
    );
  } catch (error) {
    console.error("Could not load saved tasks:", error);
    return [];
  }
}

// Save tasks in browser storage.
function saveTasks() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    return true;
  } catch (error) {
    console.error("Could not save tasks:", error);
    listMessage.textContent =
      "Warning: changes could not be saved in this browser.";
    return false;
  }
}

// Show total, pending, and completed counts.
function updateStats() {
  document.getElementById("totalCount").textContent = tasks.length;

  document.getElementById("pendingCount").textContent =
    tasks.filter(task => !task.completed).length;

  document.getElementById("completedCount").textContent =
    tasks.filter(task => task.completed).length;
}

// Draw the task list.
function renderTasks() {
  taskList.replaceChildren();

  const filter = taskFilter.value;

  const visibleTasks = tasks.filter(task => {
    if (filter === "pending") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  emptyMessage.hidden = visibleTasks.length > 0;

  if (tasks.length === 0) {
    emptyMessage.textContent =
      "No tasks yet. Add your first task above!";
  } else if (visibleTasks.length === 0) {
    emptyMessage.textContent =
      "No tasks match this filter.";
  }

  visibleTasks.forEach(task => {
    const item = document.createElement("li");
    item.className = "task-item";

    if (task.completed) {
      item.classList.add("completed");
    }

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.setAttribute(
      "aria-label",
      `Mark ${task.title} as completed`
    );

    checkbox.addEventListener("change", () => {
      task.completed = checkbox.checked;
      saveTasks();
      renderTasks();
    });

    const title = document.createElement("span");
    title.className = "task-title";
    // textContent prevents task titles from being treated as HTML.
    title.textContent = task.title;

    const actions = document.createElement("div");
    actions.className = "task-actions";

    const editButton = document.createElement("button");
    editButton.type = "button";
    editButton.textContent = "Edit";
    editButton.setAttribute("aria-label", `Edit ${task.title}`);

    editButton.addEventListener("click", () => {
      editingId = task.id;
      taskTitle.value = task.title;
      formHeading.textContent = "Edit task";
      saveButton.textContent = "Save Changes";
      cancelButton.hidden = false;
      formMessage.textContent = "";
      taskTitle.focus();
    });

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";
    deleteButton.setAttribute("aria-label", `Delete ${task.title}`);

    deleteButton.addEventListener("click", () => {
      tasks = tasks.filter(item => item.id !== task.id);

      if (editingId === task.id) {
        resetForm();
      }

      saveTasks();
      renderTasks();
      listMessage.textContent = "Task deleted.";
    });

    actions.append(editButton, deleteButton);
    item.append(checkbox, title, actions);
    taskList.appendChild(item);
  });

  updateStats();
}

// Return the form to add-task mode.
function resetForm() {
  editingId = null;
  taskForm.reset();
  formHeading.textContent = "Add a task";
  saveButton.textContent = "Add Task";
  cancelButton.hidden = true;
  formMessage.textContent = "";
}

// Add a new task or update an existing one.
taskForm.addEventListener("submit", event => {
  event.preventDefault();

  const title = taskTitle.value.trim();

  if (!title) {
    formMessage.textContent = "Please enter a task title.";
    taskTitle.focus();
    return;
  }

  if (title.length > 100) {
    formMessage.textContent =
      "Task title must be 100 characters or fewer.";
    return;
  }

  // Prevent duplicate task titles, ignoring capitalization.
  const duplicate = tasks.some(task =>
    task.title.toLowerCase() === title.toLowerCase() &&
    task.id !== editingId
  );

  if (duplicate) {
    formMessage.textContent = "This task already exists.";
    return;
  }

  if (editingId !== null) {
    tasks = tasks.map(task =>
      task.id === editingId ? { ...task, title } : task
    );
    listMessage.textContent = "Task updated.";
  } else {
    const nextId = tasks.length
      ? Math.max(...tasks.map(task => task.id)) + 1
      : 1;

    tasks.push({
      id: nextId,
      title,
      completed: false
    });

    listMessage.textContent = "Task added.";
  }

  saveTasks();
  resetForm();
  renderTasks();
  taskTitle.focus();
});

// Cancel editing.
cancelButton.addEventListener("click", resetForm);

// Filter tasks.
taskFilter.addEventListener("change", renderTasks);

// Initial display.
renderTasks();