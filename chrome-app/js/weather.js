const API_KEY = "8d6485c8c6b554cfa92e82e6bbd2a452";

function onGeoSuccess(position) {
  console.log(position);
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log(`The location is (${lat}, ${lon})`);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = data.name;
      city.innerText = data.weather[0].main;
    });
}

function onGeoError() {}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
