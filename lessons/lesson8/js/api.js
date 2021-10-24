document.addEventListener("DOMContentLoaded", (event) => {
    getWeather("Moscow");
})

function getWeather(city) {
    fetch("https://api.openweathermap.org/data/2.5/.........." + city + "&..........")
        .then(response => response.json())
        .then(weather => {
            console.log(weather);
            document.querySelector(".city").innerText = weather.name;
            //
        })
        .catch(errors => console.log(errors));
}