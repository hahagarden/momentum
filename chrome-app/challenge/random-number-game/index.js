const generateForm = document.querySelector("#generate-form");
const typedInput = generateForm.querySelector("input");
const guessInput = document.querySelector("#guess input");
const playButton = document.querySelector("#guess button");
const inputMsg = document.querySelector("#result span:first-child");
const resultMsg = document.querySelector("#result span:last-child");

let typedNumber;
let randomNumber;

function handleSubmit(event) {
  if (typedInput.value >= 0) {
    event.preventDefault();
    typedNumber = typedInput.value;
  } else {
    alert("Generate a positive number!");
  }
}

function playGuess(event) {
  if (typedNumber != null) {
    event.preventDefault();
    randomNumber = Math.ceil(Math.random() * typedNumber);
    guessInput.value = randomNumber;
    inputMsg.innerText = `You chose: ${typedNumber}, the machine chose: ${randomNumber}.`;
    if (randomNumber != typedNumber) {
      resultMsg.innerText = "You lose!";
    } else {
      resultMsg.innerText = "You win!";
    }
  } else {
    alert("Generate the number first!");
  }
}

generateForm.addEventListener("submit", handleSubmit);
playButton.addEventListener("click", playGuess);
