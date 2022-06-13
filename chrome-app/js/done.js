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

function deleteList(event) {
  const li = event.target.parentElement; // we can access to the parent element of the button using event.target.parentElement
  li.remove();
  switch (event.path[2].id) {
    case "toDo-list":
      toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //new array excluding having filter(false) element
      saveToDos();
      break;
    case "done-list":
      dones = dones.filter((done) => done.id !== parseInt(li.id)); //new array excluding having filter(false) element
      saveDones();
  }
}

function moveToDo(event) {
  deleteList(event);
  const clickedToDo = event.target.parentElement;
  const span = clickedToDo.querySelector("span");
  const clickedToDoObj = {
    text: span.innerText,
    id: clickedToDo.id,
    list: "dones",
  };
  dones.push(clickedToDoObj);
  paintList(clickedToDoObj);
  saveDones();
}

function paintList(whatList) {
  const li = document.createElement("li");
  li.id = whatList.id;
  const span = document.createElement("span"); //not only list but also span to add button and delete function
  span.innerText = whatList.text;
  span.classList.add("list-style");
  span.addEventListener("mouseenter", onMouseEnter);
  span.addEventListener("mouseleave", onMouseLeave);
  span.addEventListener("click", moveToDo);
  const button = document.createElement("button");
  button.innerText = "×";
  button.classList.add("button-style");
  button.addEventListener("click", deleteList);
  li.appendChild(span);
  li.appendChild(button);
  switch (whatList.list) {
    case "todos":
      toDoList.appendChild(li);
      break;
    case "dones":
      doneList.appendChild(li);
      break;
  }
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const typedInput = toDoInput.value;
  const typedInputObj = {
    text: typedInput,
    id: Date.now(),
    list: "todos",
  };
  toDos.push(typedInputObj);
  toDoInput.value = "";
  paintList(typedInputObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
const savedDones = localStorage.getItem(DONES_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintList); // a function is excuted for each item in array
}

if (savedDones !== null) {
  const parsedDones = JSON.parse(savedDones);
  dones = parsedDones;
  parsedDones.forEach(paintList);
}
