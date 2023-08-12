// Storing API key to call weather elements

const apiKey = "2657fbd907fd8507d0d05febea9daba8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


//query selectors in the DOM

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


// Async function to get weather update by city name

async function getWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);


    // Using if statement to check when user types in wrong city name and what should be displayed.
    // Using the keys from OpenWeathermap.org to display the an image that corresponds to the weather forecast of any city typed.

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        document.querySelector("#foot").style.display = "none";
    }
    else{
        let data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".con").innerHTML = data.sys.country;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";  //rounded the decimal point.
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        }


        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
        document.querySelector("#foot").style.display = "block";

    }

}


// Adding event listner to the search button

searchBtn.addEventListener("click", ()=>{
    getWeather(searchBox.value);
});


// Triggering a button click when user hits the enter key.

let hit = document.getElementById("myInput");
hit.addEventListener("keypress", function (event) {
    if(event.key === "Enter"){
        event.preventDefault();
        document.getElementById("myBtn").click();
    }
});