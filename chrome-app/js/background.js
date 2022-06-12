const images = [
  "img/0.jpg",
  "img/1.jpg",
  "img/2.jpg",
  "img/3.jpg",
  "img/4.jpg",
  "img/5.jpg",
  "img/6.jpg",
  "img/7.jpg",
  "img/8.jpg",
  "img/9.jpg",
];

const chosenImange = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = chosenImange;
bgImage.classList.add("bgImage");

document.body.appendChild(bgImage); //created Element is only on JS, so append it to HTML body.
