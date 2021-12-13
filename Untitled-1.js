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
let TypeOfTaskSection = document.getElementById("TypeOfTaskSectionId");

let dropSectionTwoBt = document.getElementById("dropChooseActionSectionBt");
let dropTypeOfTaskSectionBt = document.getElementById('dropTypeOfTaskSectionBtId');
let dropNegativeActionSectionBt = document.getElementById('dropNegativeActionSectionBtId');

// ***display final div accordingly to chosen action***

// positive action buttons and container
let projectBt = document.getElementById('projectBt');
let actNowBt = document.getElementById('actNowBt');
let todoBt = document.getElementById('todoBt')
let typeOfTaskSection = document.getElementById('typeOfTaskSectionId')

// negative action buttons and container
let recycleBinBt = document.getElementById('recycleBinBt');
let somedayMaybeBt = document.getElementById('somedayMaybeBt');
let referenceMaterialBt = document.getElementById('referenceMaterialBt');
let negativeActionSection = document.getElementById('negativeActionSectionId');

// new project
let projectsContainer = document.getElementById('projectsContainerId');
const saveNewProject = function () {
  projectsContainer.style.display = "block";
  let projectsSubContainer = document.createElement('div');
  projectsContainer.append(projectsSubContainer);
  let projectBody = document.createElement('p');
  let projectBodyText = document.createTextNode('test project body text');
  projectBody.append(projectBodyText);
  projectsSubContainer.append(projectBody);
}

// new todo
let todosContainer = document.getElementById('todosContainerId');
let todosParentList = document.getElementById('todosParentListId');
const saveNewTodo = function () {
  let newTodo = document.createElement('li');
  let newTodoText = document.createTextNode('test todo text');
  newTodo.append(newTodoText);
  todosParentList.append(newTodo);
}

// show links to external software
let externalSoftwareLinksSection = document.getElementById('externalSoftwareLinksSectionId');


// add negative action task to container
let recycleBinContainer = document.getElementById('recycleBinContainerId');
let somedayTasksContainer = document.getElementById('somedayTasksContainerId');
let referenceMaterialContainer = document.getElementById('referenceMaterialContainerId');
const saveNegativeActionTask = function (container) {
  container.style.display = "block";
  let newNegativeTask = document.createElement('li');
  let newNegativeTaskText = document.createTextNode('test negative task text');
  newNegativeTask.append(newNegativeTaskText);
  container.append(newNegativeTask);
}




// ***add text to container***

// getting DOM elements
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
