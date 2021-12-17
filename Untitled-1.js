console.log("CONSOLE YES");

// getting the task name
let taskNameField = document.getElementById('taskName');
// for (x = Infinity; x > 0; x++) {
//   taskNameFieldValue = taskNameField.value;
// }

const dropSection = function (section_name) {
  section_name.style.display = "block";
  if (section_name == typeOfTaskSection) { 
    /* this if statement's goal is to prevent negativeActionSection and typeOfTaskSection
    from appearing at the same time. When one of the is called, the other's display
    properties are changed to none, and viceversa */
    negativeActionSection.style.display = 'none';
  } else if (section_name == negativeActionSection) {
    typeOfTaskSection.style.display = 'none';
    }
};

// get the DOM elements
let chooseActionSection = document.getElementById("chooseActionSectionId"); 
let dropSectionTwoBt = document.getElementById("dropChooseActionSectionBt");
let dropTypeOfTaskSectionBt = document.getElementById('dropTypeOfTaskSectionBtId');
let dropNegativeActionSectionBt = document.getElementById('dropNegativeActionSectionBtId');

// ***display final div according to chosen action***

// positive action buttons and container
let projectBt = document.getElementById('projectBt');
let actNowBt = document.getElementById('actNowBt');
let todoBt = document.getElementById('todoBt');
let typeOfTaskSection = document.getElementById('typeOfTaskSectionId');

// negative action buttons and container
let recycleBinBt = document.getElementById('recycleBinBt');
let somedayMaybeBt = document.getElementById('somedayMaybeBt');
let referenceMaterialBt = document.getElementById('referenceMaterialBt');
let negativeActionSection = document.getElementById('negativeActionSectionId');

// new project
let projectsContainer = document.getElementById('projectsContainerId');
const saveNewProject = function (taskNameText) {
  savedProjectsList.push(taskNameText);
  projectsContainer.style.display = "block";
  let projectsSubContainer = document.createElement('div');
  projectsContainer.append(projectsSubContainer);
  let projectBody = document.createElement('p');
  let projectBodyText = document.createTextNode(taskNameText);
  projectBody.append(projectBodyText);
  projectsSubContainer.append(projectBody);
  localStorage.setItem('projects', JSON.stringify(savedProjectsList));
}
const getSavedProjects = JSON.parse(localStorage.getItem('projects'));
let savedProjectsList = [];
if (savedProjectsList != getSavedProjects) {
  let savedProjectsList2 = getSavedProjects || [];
  savedProjectsList2.forEach(savedProject => saveNewProject(savedProject));
}

// new todo
let todosContainer = document.getElementById('todosContainerId');
let todosParentList = document.getElementById('todosParentListId');
const saveNewTodo = function (taskNameText) {
  savedTodosList.push(taskNameText);
  todosContainer.style.display = "block";
  let newTodo = document.createElement('li');
  let newTodoText = document.createTextNode(taskNameText);
  newTodo.append(newTodoText);
  todosParentList.append(newTodo);
  localStorage.setItem("todos", JSON.stringify(savedTodosList));
}
const getSavedTodos = JSON.parse(localStorage.getItem('todos'));
let savedTodosList = [];
if (savedTodosList != getSavedTodos) {
  let savedTodosList2 = getSavedTodos || [];
  savedTodosList2.forEach(savedTodo => saveNewTodo(savedTodo));
}

// show links to external software
// just grabbing the element from the DOM, the action is performed by the dropSection function
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
// let taskNameInput = document.getElementById("finalText");
// let secondForm = document.getElementById('secondForm')

// // let tasksList = [];  

// const addTask = function (task) {
//   tasksList.push(task); // adding task to storage array
//   console.log(task); // debugging
//   let taskTag = document.createElement('li');
//   let taskText = document.createTextNode(task);
//   taskTag.append(taskText);
//   let listParent = document.getElementById('listParent');
//   listParent.append(taskTag);
//   localStorage.setItem("tasks", JSON.stringify(tasksList));
// };

// secondForm.onsubmit = (event) => {
//   event.preventDefault(); // prevents the page refresh on submit
//   addTask(taskNameInput.value);
// }

// // updating data when the app starts
// const existingTasks = JSON.parse(localStorage.getItem("tasks"));
// let tasksList = [];
// if (tasksList != existingTasks){
//   let tasksList = existingTasks || [];
//   tasksList.forEach(savedTask => addTask(savedTask));
//   console.log(existingTasks)
// }
