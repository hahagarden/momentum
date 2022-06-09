const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date(); //create new Date object every second
  const hours = String(date.getHours()).padStart(2, "0"); //padStart: padding to start
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // if not, 00:00:00 at the first web load
setInterval(getClock, 1000);
