let tasks = [];

const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const enterButton = document.querySelector('.enter-button');

function addTask(description) {
  const task = {
    id: Date.now(),
    description,
    completed: false,
  };
  tasks.push(task);
  renderTasks();
}

function deleteTask(taskId) {
  tasks = tasks.filter((task) => task.id !== taskId);
  renderTasks();
}

function toggleTask(taskId) {
  tasks = tasks.map((task) =>
    task.id === taskId ? { ...task, completed: !task.completed } : task
  );
  renderTasks();
}

function renderTasks() {
  const sortedTasks = [
    ...tasks.filter((task) => !task.completed),
    ...tasks.filter((task) => task.completed),
  ];
  taskList.innerHTML = '';

  sortedTasks.forEach((task) => {
    const li = document.createElement('li');
    li.className = `task-item ${task.completed ? 'completed' : ''}`;

    li.innerHTML = `
                    <input type="checkbox" 
                           class="task-checkbox" 
                           ${task.completed ? 'checked' : ''}
                           onchange="toggleTask(${task.id})">
                    <span class="task-text">${task.description}</span>
                    <button class="delete-btn" onclick="deleteTask(${
                      task.id
                    })">🗑</button>
                `;

    taskList.appendChild(li);
  });
}

taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && taskInput.value.trim()) {
    addTask(taskInput.value.trim());
    taskInput.value = '';
  }
});

enterButton.addEventListener('click', () => {
  if (taskInput.value.trim()) {
    addTask(taskInput.value.trim());
    taskInput.value = '';
  }
});

renderTasks();
