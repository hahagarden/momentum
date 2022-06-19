const weatherDiv = document.querySelector("#weather");
const API_KEY = "8d6485c8c6b554cfa92e82e6bbd2a452";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weatherIcon = data.weather[0].icon;
      const weatherIconAddress = `http://openweathermap.org/img/wn/${weatherIcon}.png`;
      const city = document.querySelector("#weather span");
      const temper = document.querySelector("#weather div span");
      const weather = document.querySelector("#weather div img");
      city.innerText = `@${data.name}`;
      temper.innerText = `${data.main.temp}℃`;
      weather.setAttribute("src", weatherIconAddress);
      weatherDiv.classList.add("weather-border");
    });
}

function onGeoError() {}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
