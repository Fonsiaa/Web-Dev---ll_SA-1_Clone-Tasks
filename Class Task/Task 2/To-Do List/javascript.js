document.getElementById('addTaskButton').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');

    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="remove-task">Remove</button>
    `;

    li.querySelector('.remove-task').addEventListener('click', function() {
        taskList.removeChild(li);
    });

    li.querySelector('.task-text').addEventListener('click', function() {
        li.classList.toggle('checked');
    });

    taskList.appendChild(li);
    taskInput.value = ""; // Clear input
}