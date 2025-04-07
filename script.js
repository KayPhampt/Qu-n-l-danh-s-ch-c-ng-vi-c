let tasks = [];

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      ${task}
      <button onclick="editTask(${index})">Sửa</button>
      <button onclick="deleteTask(${index})">Xoá</button>
    `;

    list.appendChild(li);
  });
}

function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (task !== "") {
    tasks.push(task);
    input.value = "";
    renderTasks();
  }
}

function editTask(index) {
  const newTask = prompt("Sửa nội dung công việc:", tasks[index]);
  if (newTask !== null && newTask.trim() !== "") {
    tasks[index] = newTask.trim();
    renderTasks();
  }
}

function deleteTask(index) {
  if (confirm("Bạn có chắc muốn xoá không?")) {
    tasks.splice(index, 1);
    renderTasks();
  }
}
