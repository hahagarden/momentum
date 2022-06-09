const loginForm = document.querySelector("#login-form"); // bring the HTML code which is id=login-form in JS's point of view
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //one of the rules, upperCase is used when it contains only strings and not that important data
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  // the first argument, event, is JS automatically offers the user the information about the event when it occurs
  event.preventDefault(); // event has Default actions and we often prevent them from occurring for next works
  const typedusername = loginInput.value;
  localStorage.setItem(USERNAME_KEY, typedusername); // saving data on browser API, localStorage
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(typedusername);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME); // show the form
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername); // show the greetings
}
