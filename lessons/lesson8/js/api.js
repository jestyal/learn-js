document.addEventListener("DOMContentLoaded", (event) => {
    // getWeather("Moscow");
    getDog();
})

// function getWeather(city) {
//     fetch("https://api.openweathermap.org/data/2.5/.........." + city + "&..........")
//         .then(response => response.json())
//         .then(weather => {
//             console.log(weather);
//             document.querySelector(".city").innerText = weather.name;
//             //
//         })
//         .catch(errors => console.log(errors));
// }


function getDog() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(dog => {
            document.querySelector(".dog__wrap img").setAttribute("src", dog.message);
        })
        .catch(errors => console.log(errors));
}
