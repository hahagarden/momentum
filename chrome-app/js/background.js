const images = ["img/0.jpeg", "img/1.jpeg"];

const chosenImange = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = chosenImange;

document.body.appendChild(bgImage); //created Element is only on JS, so append it to HTML body.
