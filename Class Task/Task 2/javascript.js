const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');
const taskInput = document.getElementById('task-input');

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = taskInput.value.trim();
    if (task) {
        addTask(task);
        taskInput.value = '';
    }
});

function addTask(task) {
    const taskHTML = `
        <li class="task">
            <input type="checkbox" id="${task}">
            <label for="${task}">${task}</label>
            <button class="delete-btn">Delete</button>
        </li>
    `;
    taskList.innerHTML += taskHTML;
}

taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        const task = e.target.parentNode;
        task.remove();
    }
});