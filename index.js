function addTask() {
  const taskInput = document.getElementById('input');
  const taskText = taskInput.value.trim();

  if (!taskText) {
    alert('Task cannot be empty.');
    return;
  }

  const taskContainer = document.getElementById('task-container');
  const taskElement = document.createElement('div');
  taskElement.classList.add('task-item'); // Changed from ID to class for multiple items

  taskElement.innerHTML = `
    <p>${taskText}</p>
    <button type="button" class="delete-btn">Delete</button>
  `;

  // Attach event listener instead of inline onclick
  taskElement.querySelector('.delete-btn').addEventListener('click', deleteTask);

  taskContainer.appendChild(taskElement);
  taskInput.value = ''; // Clear input after adding
}

/**
 * Deletes the task item associated with the event.
 * @param {Event} event 
 */
function deleteTask(event) {
  const taskItem = event.target.closest('.task-item');
  if (taskItem) {
    taskItem.remove();
  }
}
