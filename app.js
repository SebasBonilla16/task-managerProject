// Adding a new task
let taskInput = document.getElementById("create-task");
// Button
let addButton = document.getElementsByTagName("button")[0];
// Ul for need to do 
let needTodoHolder = document.getElementById("need-todo");
// Completed Tasks
let completedTasksholder = document.getElementById("completed-tasks");

// Creating function for creating task item
let createNewTaskElement = function(taskString){
    let listItem = document.createElement("li");
    // checkbox for task completion
    let checkBox = document.createElement("input");
    // label
    let label = document.createElement("label");
    //

}