const today = document.querySelector("#time span");
const clock = document.querySelector("#time h2");

function getClock() {
  //just show hours:minutes:seconds, and setInterval() calls getClock() every second
  const time = new Date();
  const years = time.getFullYear();
  const months = time.getMonth();
  const dates = time.getDate();
  const days = time.getDay();
  const days_eng = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const hours = String(time.getHours()).padStart(2, "0"); //padStart: padding to start
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const seconds = String(time.getSeconds()).padStart(2, "0");
  today.innerText = `${years}/${months}/${dates}/${days_eng[days]}`;
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // if not, 00:00:00 at the first web load
setInterval(getClock, 1000); //call getClock() and create new Date object every second
