console.log("CONSOLE YES");

const dropSection = function (section_name) {
  section_name.style.display = "block";
  /* it's display CSS property is originally 'none', 
  this sets it to 'block' so it becomes visible.
  If the intention is to make it a toogle, 
  it can be wrapped in an if statement*/
};

// get the DOM elements
let chooseActionSection = document.getElementById("chooseActionSectionId"); 
let selectTypeOfTaskSection = document.getElementById("selectTypeOfTaskDivId");

let dropSectionTwoBt = document.getElementById("dropSectionTwoBt");
// dropSectionTwoBt.addEventListener("click", dropSection(chooseActionSection));

let dropTypeOfTaskSectionBt = document.getElementById('dropTypeOfTaskSectionBtId');
// dropTypeOfTaskSectionBt.addEventListener('click', dropSection(selectTypeOfTaskSection));

// add text to container

//getting DOM elements
let taskNameInput = document.getElementById("finalText");
let secondForm = document.getElementById('secondForm')

// let tasksList = [];  

const addTask = function (task) {
  tasksList.push(task); // adding task to storage array
  console.log(task); // debugging
  let taskTag = document.createElement('li');
  let taskText = document.createTextNode(task);
  taskTag.append(taskText);
  let listParent = document.getElementById('listParent');
  listParent.append(taskTag);
  localStorage.setItem("tasks", JSON.stringify(tasksList));
};

secondForm.onsubmit = (event) => {
  event.preventDefault(); // prevents the page refresh on submit
  addTask(taskNameInput.value);
}

// updating data when the app starts
const existingTasks = JSON.parse(localStorage.getItem("tasks"));
let tasksList = [];
if (tasksList != existingTasks){
  let tasksList = existingTasks || [];
  tasksList.forEach(savedTask => addTask(savedTask));
  console.log(existingTasks)
}
