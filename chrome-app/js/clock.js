const clock = document.querySelector("h2#clock");

function getClock() {
  //just show hours:minutes:seconds, and setInterval() calls getClock() every second
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0"); //padStart: padding to start
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // if not, 00:00:00 at the first web load
setInterval(getClock, 1000); //call getClock() and create new Date object every second
