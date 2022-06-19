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
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //new array excluding having filter(false) element
  saveToDos();
}

function paintToDo(typedInput) {
  const li = document.createElement("li");
  li.id = typedInput.id;
  const span = document.createElement("span"); //not only list but also span to add button and delete function
  span.innerText = typedInput.text;
  span.classList.add("list-style");
  const button = document.createElement("button");
  button.innerText = "×";
  button.classList.add("button-style");
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
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

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo); // a function is excuted for each item in array
}
