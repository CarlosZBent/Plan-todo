console.log("CONSOLE YES");

const dropSection = function () {
  // function to drop the div
  console.log("hello"); // for debugging
  let section2 = document.getElementById("section2"); // get the section
  section2.style.display = "block";
  /* it's display CSS property is originally 'none', 
  this sets it to hidden so it becomes visible.
  If the intention is to make it a toogle, 
  it can be wrapped in an if statement*/
};

let dropBt = document.getElementById("drop");
dropBt.addEventListener("click", dropSection); // get the button and add the event

// add text to container

//get input tag from HTML
let taskNameInput = document.getElementById("finalText");

const addTask = function (task) {
  /* function to add a task to a container. The task parameter
  is filled with the value from the input */
  console.log(task); // debugging
  // adding text from the input to the container
  let taskTag = document.createElement('p');
  let taskText = document.createTextNode(task);
  taskTag.append(taskText);
  let container = document.getElementById('container');
  container.append(taskTag);
};

// getting button tag from HTML
let saveBt = document.getElementById("finalBt");
// getting form from HTML
let secondForm = document.getElementById('secondForm')
secondForm.onsubmit = (event) => {
  event.preventDefault(); // prevents the page refresh on submit
  addTask(taskNameInput.value)
}
