console.log("CONSOLE YES");

const dropSection = function () {
  // function to drop the div
  let chooseActionSection = document.getElementById("chooseActionSectionId"); // get the section
  chooseActionSection.style.display = "block";
  /* it's display CSS property is originally 'none', 
  this sets it to hidden so it becomes visible.
  If the intention is to make it a toogle, 
  it can be wrapped in an if statement*/
};

let dropBt = document.getElementById("dropSectionTwoBt");
dropBt.addEventListener("click", dropSection); // get the button and add the event

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
