const apiKey = "fda038555861b14b6a1294f2316eaace";
const searchBox = document.querySelector("#search");
const weatherCard = document.querySelectorAll("li");
let temp = [];

async function getWeather() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${search.value}&units=metric&appid=fda038555861b14b6a1294f2316eaace`,
    { mode: "cors" }
  );
  weatherCard[0].innerHTML = "Searching...";
  if (response.status === 404) {
    weatherCard[0].innerHTML = "⚠️ City not found"
  } else if (response.status === 400) {
    weatherCard[0].innerHTML = "⚠️ You must enter a city to search"
  } else {
    const weatherData = await response.json();
    temp = [
      weatherData.name.toUpperCase(),
      weatherData.weather[0].description,
      weatherData.main.temp,
      weatherData.main.humidity,
      weatherData.wind.speed,
    ];
    updateCard();
  }
}

function updateCard() {
  weatherCard[0].innerHTML = temp[0]
  weatherCard[1].innerHTML = temp[1]
  weatherCard[2].innerHTML = `${temp[2]}°C`
  weatherCard[3].innerHTML = `Humidity: ${temp[3]}%`
  weatherCard[4].innerHTML = `Wind: ${temp[4]} km/h`
}