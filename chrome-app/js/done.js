const toDoForm = document.querySelector("#toDo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#toDo-list");
const doneList = document.querySelector("#done-list");
const TODOS_KEY = "todos";
const DONES_KEY = "dones";

let toDos = []; // let for toDos=savedToDos;
let dones = [];

function onMouseEnter(event) {
  const target = event.target;
  target.classList.add("onMouseEnter");
}

function onMouseLeave(event) {
  const target = event.target;
  target.classList.remove("onMouseEnter");
}

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function saveDones() {
  localStorage.setItem(DONES_KEY, JSON.stringify(dones));
}

function deleteToDo(event) {
  const li = event.target.parentElement; // we can access to the parent element of the button using event.target.parentElement
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //new array excluding having filter(false) element
  saveToDos();
}

function moveToDo(event) {
  deleteToDo(event);
  const clickedToDo = event.target.parentElement;
  const span = clickedToDo.querySelector("span");
  const clickedToDoObj = {
    text: span.innerText,
    id: clickedToDo.id,
  };
  dones.push(clickedToDoObj);
  paintDone(clickedToDoObj);
  saveDones();
}

function paintToDo(typedInput) {
  const li = document.createElement("li");
  li.id = typedInput.id;
  const span = document.createElement("span"); //not only list but also span to add button and delete function
  span.innerText = typedInput.text;
  span.classList.add("list-style");
  span.addEventListener("mouseenter", onMouseEnter);
  span.addEventListener("mouseleave", onMouseLeave);
  span.addEventListener("click", moveToDo);
  const button = document.createElement("button");
  button.innerText = "×";
  button.classList.add("button-style");
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function paintDone(clickedToDo) {
  const li = document.createElement("li");
  li.id = clickedToDo.id;
  const span = document.createElement("span");
  span.innerText = clickedToDo.text;
  span.classList.add("list-style");
  span.addEventListener("mouseenter", onMouseEnter);
  span.addEventListener("mouseleave", onMouseLeave);
  li.appendChild(span);
  doneList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const typedInput = toDoInput.value;
  const typedInputObj = { text: typedInput, id: Date.now() };
  toDos.push(typedInputObj);
  toDoInput.value = "";
  paintToDo(typedInputObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
const savedDones = localStorage.getItem(DONES_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo); // a function is excuted for each item in array
}

if (savedDones !== null) {
  const parsedDones = JSON.parse(savedDones);
  dones = parsedDones;
  parsedDones.forEach(paintDone);
}
