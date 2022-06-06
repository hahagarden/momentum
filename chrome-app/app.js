const loginForm = document.querySelector("#login-form"); // bring the HTML code which is id=login-form in JS's point of view
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //one of the rules, upperCase is used when it contains only strings and not that important data

function onLoginSubmit(event) {
  // the first argument, event, is JS automatically offers the user the information about the event when it occurs
  event.preventDefault(); // event has Default actions and we often prevent them from occurring for next works
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}!`; // combine strings and variables,  "Hello " + username + "!"
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
