console.log("js called");

const getWeather = city => {
  fetch("https://1r80o.sse.codesandbox.io/weather?city=" + city).then(
    response => {
      response.json().then(data => {
        const weatherLabel = document.querySelector("label");
        weatherLabel.innerText = data.forecast.forecast;
        console.log(data);
      });
    }
  );
};

const weatherForm = document.querySelector("form");
const city = document.querySelector("input");

weatherForm.addEventListener("submit", e => {
  e.preventDefault();
  console.log(city.value);
  getWeather(city.value);
});
