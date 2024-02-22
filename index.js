let input = document.getElementById("city");
let button = document.getElementById("check");
let container = document.querySelector(".weather-container");
button.addEventListener("click", (e) => {
  getCoordonate(input.value);
});
async function getCoordonate(cityName) {
  const reponse = await fetch(
    "https://api.openweathermap.org/geo/1.0/direct?q=" +
      cityName +
      "&limit=1&appid=c1bf6ed1577cb4eb1d3e4d7741c6ce62"
  );
  const coordonate = await reponse.json();
  //   console.log(cityName);
  getWeatherInfo(coordonate);
}

async function getWeatherInfo(temps) {
  const reponse = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
      temps[0].lat +
      "&lon=" +
      temps[0].lon +
      "&appid=c1bf6ed1577cb4eb1d3e4d7741c6ce62"
  );
  const temperature = await reponse.json();
  displayWeather(temperature);
}
function displayWeather(display) {
  container.innerHTML = `<ul>
    <li><h2>Données météo</h2></li>
    <li>Ville: ${display.name}</li>
    <li>Temperature: ${Math.floor(display.main.temp - 273.15)}</li>
    <li>Pression atmospherique: ${display.main.pressure}</li>
    <li>Vitesse du vent: ${display.wind.speed}</li>
    </ul>`;
}
