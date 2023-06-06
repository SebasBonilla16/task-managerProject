
















// Get the necessary DOM elements
const addTaskButton = document.querySelector('button');
const createTaskInput = document.querySelector('#create-task');
const needTodoList = document.querySelector('#need-todo');
const completedTaskList = document.querySelector('#completed-task');

// Event listener for the Add Task button
addTaskButton.addEventListener('click', addTask);

// Function to add a new task
function addTask() {
  const taskText = createTaskInput.value;
  
  if (taskText) {
    // Create a new list item and checkbox
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    
    // Create a label for the task text
    const label = document.createElement('label');
    label.textContent = taskText;
    
    // Create an input field for editing the task
    const editInput = document.createElement('input');
    editInput.type = 'text';
    
    // Create an edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    
    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete';
    
    // Append the elements to the list item
    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    
    // Append the list item to the appropriate list
    needTodoList.appendChild(listItem);
    
    // Clear the input field
    createTaskInput.value = '';
    
    // Add event listeners to the buttons
    checkbox.addEventListener('change', completeTask);
    editButton.addEventListener('click', editTask);
    deleteButton.addEventListener('click', deleteTask);
  }
}

// Function to mark a task as completed
function completeTask(event) {
    const listItem = event.target.parentElement;
    const label = listItem.querySelector('label');
    
    // Toggle the "completed" class on the list item
    listItem.classList.toggle('completed');
    
    // Toggle the strikethrough style on the label
    label.style.textDecoration = event.target.checked ? 'line-through' : 'none';
    
    // Move the list item to the appropriate list
    const targetList = event.target.checked ? completedTaskList : needTodoList;
    targetList.appendChild(listItem);
  }
  
// Function to edit a task
function editTask(event) {
  const listItem = event.target.parentElement;
  const label = listItem.querySelector('label');
  const editInput = listItem.querySelector('input[type="text"]');
  const isEditing = listItem.classList.contains('editMode');
  
  if (isEditing) {
    label.textContent = editInput.value;
    event.target.textContent = 'Edit';
  } else {
    editInput.value = label.textContent;
    event.target.textContent = 'Save';
  }
  
  listItem.classList.toggle('editMode');
}

// Function to delete a task
function deleteTask(event) {
  const listItem = event.target.parentElement;
  listItem.remove();
}
