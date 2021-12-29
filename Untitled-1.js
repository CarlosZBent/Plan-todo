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
  todosContainer.style.display = 'block';
  let newTodo = document.createElement('li');
  newTodo.innerHTML = taskNameText;
  newTodo.className = 'newTodo';
  let lineBreak = document.createElement('br');
  todosParentList.append(newTodo);
    // function to delete todo on UI. strike through the text.
    const strikeTodo = function () {
      // newTodo.style.textDecoration = 'line-through';
      // newTodo.style.backgroundColor = '#cccaca';
      newTodo.className = 'newTodoDeleted';
    }
    newTodo.addEventListener('click', strikeTodo);
  todosParentList.append(lineBreak);
  localStorage.setItem("todos", JSON.stringify(savedTodosList));
}
const getSavedTodos = JSON.parse(localStorage.getItem('todos'));
let savedTodosList = [];
if (savedTodosList != getSavedTodos) {
  let savedTodosList2 = getSavedTodos || [];
  savedTodosList2.forEach(savedTodo => saveNewTodo(savedTodo));
  todosContainer.style.display = 'none';
}
// removing items from DB
let todosLi = document.getElementsByClassName('newTodo');
let todosLiArray = Array.from(todosLi); // converting the object to an array to iterate over
let jsonDBArray = Array.from(getSavedTodos); // converting the object to an array to iterate over
const testingDeletion = function (){ 
  todosLiArray.forEach(function (element) { 
    let elementText = element.textContent; // getting the text from every list element
    jsonDBArray.forEach(function (value){
      if (elementText == value && element.className == 'newTodoDeleted'){ 
        /* if the list element text coincides with a value from the JSON file array 
        and it's text style is line-through it performs the action specified below */
        console.log('deleted ', value);
        let indexOfValue = getSavedTodos.indexOf(value);
        console.log(indexOfValue);
          if (indexOfValue !== -1) { // this prevents the index from deleting items it shouldnt delete
            getSavedTodos.splice(indexOfValue, 1);
            let getSavedTodosNew = JSON.stringify(getSavedTodos)
            localStorage.setItem("todos", getSavedTodosNew) // add the new array to local storage
          }
        }
      }) 
    })
  }

// show links to external software
// just grabbing the element from the DOM, the action is performed by the dropSection function
let externalSoftwareLinksSection = document.getElementById('externalSoftwareLinksSectionId');

// add useless task to recycle bin
let recycleBinContainer = document.getElementById('recycleBinContainerId');
recycleBinUl = document.getElementById('recycleBinUl');
const throwAwayTask = function (uselessTask) {
  let newUselessTask = document.createElement('li');
  let newUselessTaskText = document.createTextNode(uselessTask);
  newUselessTask.append(newUselessTaskText);
  recycleBinUl.append(newUselessTask);
}

// add someday/maybe task to container
let somedayTasksContainer = document.getElementById('somedayTasksContainerId');
let somedayTasksUl = document.getElementById('somedayTasksUl');
const saveSomedayTask = function (taskNameText) {
  savedSomedayTasks.push(taskNameText);
  let newSomedayTask = document.createElement('li');
  let newSomedayTaskText = document.createTextNode(taskNameText);
  newSomedayTask.append(newSomedayTaskText);
  somedayTasksUl.append(newSomedayTask);
  localStorage.setItem('somedayTask', JSON.stringify(savedSomedayTasks));
}
const getsavedSomedayTasks = JSON.parse(localStorage.getItem('somedayTask'))
let savedSomedayTasks = [];
if (savedSomedayTasks != getsavedSomedayTasks) {
  savedSomedayTasks2 = getsavedSomedayTasks || [];
  savedSomedayTasks2.forEach(somedayTask => saveSomedayTask(somedayTask));
}

// add reference material to container
let referenceMaterialContainer = document.getElementById('referenceMaterialContainerId');
let referenceMaterialUl = document.getElementById('referenceMaterialUl');
const saveReferenceTask = function (taskNameText) {
  savedReferenceTasks.push(taskNameText);
  let newReferenceTask = document.createElement('li');
  let newReferenceTaskText = document.createTextNode(taskNameText);
  newReferenceTask.append(newReferenceTaskText);
  referenceMaterialUl.append(newReferenceTask);
  localStorage.setItem('referenceTask', JSON.stringify(savedReferenceTasks));
}
const getsavedReferenceTasks = JSON.parse(localStorage.getItem('referenceTask'))
let savedReferenceTasks = [];
if (savedReferenceTasks != getsavedReferenceTasks) {
  savedReferenceTasks2 = getsavedReferenceTasks || [];
  savedReferenceTasks2.forEach(referenceTask => saveReferenceTask(referenceTask))
}
