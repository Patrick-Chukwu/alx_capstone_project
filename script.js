// Define task array to store tasks
let tasks = [];

// Function to add a new task
function addTask() {
    const taskName = document.getElementById('task-name').value;
    const dueDate = document.getElementById('due-date').value;
    const priority = document.getElementById('priority').value;
    
    if (taskName !== '') {
        const task = {
            name: taskName,
            dueDate: dueDate,
            priority: priority,
            completed: false
        };
        tasks.push(task);
        updateTaskList();
        saveTasksToLocalStorage();
        document.getElementById('task-name').value = '';
    }
}

// Function to update the task list
function updateTaskList() {
    const taskList = document.getElementById('tasks');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <input type="checkbox" id="task-${index}" ${task.completed ? 'checked' : ''}>
            <label for="task-${index}">${task.name}</label>
            <span>Due: ${task.dueDate}</span>
            <span>Priority: ${task.priority}</span>
            <button onclick="completeTask(${index})">Complete</button>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(taskItem);
    });
}

// Function to mark a task as complete
function completeTask(index) {
    tasks[index].completed = true;
    updateTaskList();
    saveTasksToLocalStorage();
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    updateTaskList();
    saveTasksToLocalStorage();
}

// Function to save tasks to local storage
function saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to load tasks from local storage
function loadTasksFromLocalStorage() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
    }
    updateTaskList();
}

// Add event listener for the "Add Task" button
document.getElementById('add-task').addEventListener('click', addTask);

// Load tasks from local storage when the page loads
loadTasksFromLocalStorage();
