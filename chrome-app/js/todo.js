const toDoForm = document.querySelector("#toDo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#toDo-list");
const TODOS_KEY = "todos";

let toDos = []; // let for toDos=savedToDos;

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement; // we can access to the parent element of the button using event.target.parentElement
  li.remove();
}

function paintToDo(typedInput) {
  const li = document.createElement("li");
  const span = document.createElement("span"); //not only list but also span to add button and delete function
  span.innerText = typedInput;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const typedInput = toDoInput.value;
  toDos.push(typedInput);
  toDoInput.value = "";
  paintToDo(typedInput);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = JSON.parse(localStorage.getItem(TODOS_KEY));
toDos = savedToDos;
savedToDos.forEach(paintToDo); // a function is excuted for each item in array
