setInterval(function () {
  let currentCityTime = moment.tz.guess();
  let currentCityTitleElement = document.querySelector(".city-title");
  let currentCityDateElement = document.querySelector("#current-date");
  let currentCityTimeElement = document.querySelector("#current-time");

  currentCityTitleElement.innerHTML = currentCityTime
    .replace("_", " ")
    .split("/")[1];
  currentCityDateElement.innerHTML = moment
    .tz(currentCityTime)
    .format("MMMM Do YYYY");
  currentCityTimeElement.innerHTML = moment
    .tz(currentCityTime)
    .format("h:mm:ss [<small>] A [</small>]");
}, 1000);

function updateCity(event) {

  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = cityTimeZone;
  citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h2 class="city-title">${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss [<small>] A [</small>]"
          )}</div>
        </div>
  
  `;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
