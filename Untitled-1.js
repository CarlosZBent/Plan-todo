console.log("CONSOLE YES");

// getting the task name input from the DOM
let taskNameField = document.getElementById('taskName');

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
  projectsContainer.style.display = "none";
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
  todosContainer.style.display = 'none';
}

// show links to external software
// just grabbing the element from the DOM, the action is performed by the dropSection function
let externalSoftwareLinksSection = document.getElementById('externalSoftwareLinksSectionId');

// add useless task to recycle bin
let recycleBinContainer = document.getElementById('recycleBinContainerId');
const throwAwayTask = function (container, uselessTask) {
  let newUselessTask = document.createElement('li');
  let newUselessTaskText = document.createTextNode(uselessTask);
  newUselessTask.append(newUselessTaskText);
  container.append(newUselessTask)
}

// add someday/maybe task to container
let somedayTasksContainer = document.getElementById('somedayTasksContainerId');
const saveSomedayTask = function (container, taskNameText) {
  savedSomedayTasks.push(taskNameText);
  let newSomedayTask = document.createElement('li');
  let newSomedayTaskText = document.createTextNode(taskNameText);
  newSomedayTask.append(newSomedayTaskText);
  container.append(newSomedayTask);
  localStorage.setItem('somedayTask', JSON.stringify(savedSomedayTasks));
}
const getsavedSomedayTasks = JSON.parse(localStorage.getItem('somedayTask'))
let savedSomedayTasks = [];
if (savedSomedayTasks != getsavedSomedayTasks) {
  savedSomedayTasks2 = getsavedSomedayTasks || [];
  savedSomedayTasks2.forEach(somedayTask => saveSomedayTask(somedayTasksContainer, somedayTask))
}

// add reference material to container
let referenceMaterialContainer = document.getElementById('referenceMaterialContainerId');
const saveReferenceTask = function (container, taskNameText) {
  savedReferenceTasks.push(taskNameText);
  let newSomedayTask = document.createElement('li');
  let newSomedayTaskText = document.createTextNode(taskNameText);
  newSomedayTask.append(newSomedayTaskText);
  container.append(newSomedayTask);
  localStorage.setItem('referenceTask', JSON.stringify(savedReferenceTasks));
}
const getsavedReferenceTasks = JSON.parse(localStorage.getItem('referenceTask'))
let savedReferenceTasks = [];
if (savedReferenceTasks != getsavedReferenceTasks) {
  savedReferenceTasks2 = getsavedReferenceTasks || [];
  savedReferenceTasks2.forEach(somedayTask => saveReferenceTask(referenceMaterialContainer, somedayTask))
}
