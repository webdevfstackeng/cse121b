/* ----------------------- W06: Project: Global Current Weather Forecast --------------------------- */

// Variables declaration and assignment.
const searchBtn = document.querySelector("#searchBtn");
const cityInput = document.querySelector("#cityInput");
const weatherInfo = document.querySelector("#weatherInfo");
const apiKey = "8575b067859fd13c25baadd48d5383e0"; // OpenWeatherMap API key 

/* ------------------------ Event Listener --------------------------- */

// Listen for a non-empty click event to trigger the "getWeather()" to fetch weather data.
searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city !== "") {
    getWeather(city);
  } else {
    weatherInfo.innerHTML = "Please enter a city name";
  }
});

/* -------------------- async getWeather Function using fetch() -----------------*/

//Function to fetch weather forecast data asynchronously
const getWeather = async(city) => {
  try {
    // Fetch weather forecast data using fetch() method
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    const response = await fetch(url);

    // Convert fetch response to JSON and assign it to "weatherData"
    const weatherData = await response.json();

    if (weatherData.cod === "404") {
      weatherInfo.innerHTML = "City not found";
    } else {
      // Call displayWeather function and pass the list of weather data (weatherData)
      displayWeather(weatherData);
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
    weatherInfo.innerHTML = "Something went wrong";
  }
}

/* The arrow function for displaying weather forecast by taking
weather data as input, and extracting city name, temperature, 
humidity and weather condition from the data using destructuring and template literals. */
const displayWeather = (weatherData) => {
  const { name, main, weather } = weatherData;
  const weatherHTML = `
    <h2>${name}</h2>
    <p>Temperature: ${main.temp}°C</p>
    <p>Humidity: ${main.humidity}%</p>
    <p>Weather: ${weather[0].description}</p>
  `;

  // Set innerHTML property of weatherInfo element to the weatherHTML string.
  weatherInfo.innerHTML = weatherHTML;
};

/* -------------------------- End of Program ----------------------------------- */


 