const body = document.querySelector("body");
const hello = document.querySelector("h2");

hello.style.color = "white";

function resizeListen() {
  if (window.innerWidth < 700) {
    body.style.backgroundColor = "#2e8ed6ff"; //skyblue
  } else if (window.innerWidth < 1300) {
    body.style.backgroundColor = "#914eadff"; //purple
  } else {
    body.style.backgroundColor = "#eebc11ff"; //yellow
  }
}

window.addEventListener("resize", resizeListen);
