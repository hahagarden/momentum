const toDoForm = document.querySelector("#toDo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#toDo-list");

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
  toDoInput.value = "";
  paintToDo(typedInput);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
