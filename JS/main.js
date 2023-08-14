// Storing API key to call weather elements

const apiKey = "2657fbd907fd8507d0d05febea9daba8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiUrl1 = "https://api.openweathermap.org/data/2.5/forecast?&units=metric&q=";


//query selectors in the DOM

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

const icon1 = document.querySelector(".imgClass1");
const icon2 = document.querySelector(".imgClass2");
const icon3 = document.querySelector(".imgClass3");
const icon4 = document.querySelector(".imgClass4");
const icon5 = document.querySelector(".imgClass5");



// Async function to get weather update by city name

async function getWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const response1 = await fetch(apiUrl1 + city + `&appid=${apiKey}`);


    // Using if statement to check when user types in wrong city name and what should be displayed.
    // Using the keys from OpenWeathermap.org to display the an image that corresponds to the weather forecast of any city typed.

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        document.querySelector("#foot").style.display = "none";
        document.querySelector("#iconsContainer").style.display = "none";
        document.querySelector(".drip").style.display = "none";

    }
    else{
        let data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".desc").innerHTML = data.weather[0].description;
        document.querySelector(".con").innerHTML = data.sys.country;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";  //rounded the decimal point.
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/cloud.svg";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.svg";
        }
        else if(data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.svg";
        }
        else if(data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.svg";
        }
        else if(data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.svg";
        }
        else if(data.weather[0].main == "Fog") {
            weatherIcon.src = "images/fog.svg";
        }
        else if(data.weather[0].main == "Smoke") {
            weatherIcon.src = "images/smoke.svg";
        }
        else if(data.weather[0].main == "Snow") {
            weatherIcon.src = "images/snow.svg";
        }
        else if(data.weather[0].main == "Hail") {
            weatherIcon.src = "images/hail.svg";
        }


        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
        document.querySelector("#foot").style.display = "block";
        document.querySelector("#iconsContainer").style.display = "block";
        document.querySelector(".drip").style.display = "block";


    }


    //getting 5 days forecast for selected city.
    // Displaying the 5 days forecast for selected city with temperature value, weather description and weather icon.

    if(response1.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        document.querySelector("#foot").style.display = "none";
        document.querySelector("#iconsContainer").style.display = "none";

    }
    else{
        let data1 = await response1.json();
        document.querySelector(".temp1").innerHTML = Math.round(data1.list[4].main.temp) + "°c";
        document.querySelector(".temp2").innerHTML = Math.round(data1.list[12].main.temp) + "°c";
        document.querySelector(".temp3").innerHTML = Math.round(data1.list[20].main.temp) + "°c";
        document.querySelector(".temp4").innerHTML = Math.round(data1.list[28].main.temp) + "°c";
        document.querySelector(".temp5").innerHTML = Math.round(data1.list[36].main.temp) + "°c";

        document.querySelector(".desc1").innerHTML = data1.list[4].weather[0].description;
        document.querySelector(".desc2").innerHTML = data1.list[12].weather[0].description;
        document.querySelector(".desc3").innerHTML = data1.list[20].weather[0].description;
        document.querySelector(".desc4").innerHTML = data1.list[28].weather[0].description;
        document.querySelector(".desc5").innerHTML = data1.list[36].weather[0].description;


        document.querySelector("#day1").innerHTML = data1.list[4].dt_txt;
        document.querySelector("#day2").innerHTML = data1.list[12].dt_txt;
        document.querySelector("#day3").innerHTML = data1.list[20].dt_txt;
        document.querySelector("#day4").innerHTML = data1.list[28].dt_txt;
        document.querySelector("#day5").innerHTML = data1.list[36].dt_txt;



        if(data1.list[4].weather[0].main == "Clouds"){
            icon1.src = "images/cloud.svg";
        }
        else if(data1.list[4].weather[0].main == "Clear"){
            icon1.src = "images/clear.svg";
        }
        else if(data1.list[4].weather[0].main == "Rain") {
            icon1.src = "images/rain.svg";
        }
        else if(data1.list[4].weather[0].main == "Drizzle") {
            icon1.src = "images/drizzle.png";
        }
        else if(data1.list[4].weather[0].main == "Mist") {
            icon1.src = "images/mist.svg";
        }
        else if(data1.list[4].weather[0].main == "Fog") {
            icon1.src = "images/fog.svg";
        }
        else if(data1.list[4].weather[0].main == "Snow") {
            icon1.src = "images/snow.svg";
        }
        else if(data1.list[4].weather[0].main == "Smoke") {
            icon1.src = "images/smoke.svg";
        }
        else if(data1.list[4].weather[0].main == "Hail") {
            icon1.src = "images/hail.svg";
        }



        if(data1.list[12].weather[0].main == "Clouds"){
            icon2.src = "images/cloud.svg";
        }
        else if(data1.list[12].weather[0].main == "Clear"){
            icon2.src = "images/clear.svg";
        }
        else if(data1.list[12].weather[0].main == "Rain") {
            icon2.src = "images/rain.svg";
        }
        else if(data1.list[12].weather[0].main == "Drizzle") {
            icon2.src = "images/drizzle.svg";
        }
        else if(data1.list[12].weather[0].main == "Mist") {
            icon2.src = "images/mist.svg";
        } 
        else if(data1.list[12].weather[0].main == "Fog") {
            icon2.src = "images/fog.svg";
        }
        else if(data1.list[12].weather[0].main == "Snow") {
            icon2.src = "images/snow.svg";
        }
        else if(data1.list[12].weather[0].main == "Smoke") {
            icon2.src = "images/smoke.svg";
        }
        else if(data1.list[12].weather[0].main == "Hail") {
            icon2.src = "images/hail.svg";
        }       



        if(data1.list[20].weather[0].main == "Clouds"){
            icon3.src = "images/cloud.svg";
        }
        else if(data1.list[20].weather[0].main == "Clear"){
            icon3.src = "images/clear.png";
        }
        else if(data1.list[20].weather[0].main == "Rain") {
            icon3.src = "images/rain.svg";
        }
        else if(data1.list[20].weather[0].main == "Drizzle") {
            icon3.src = "images/drizzle.svg";
        }
        else if(data1.list[20].weather[0].main == "Mist") {
            icon3.src = "images/mist.svg";
        }
        else if(data1.list[20].weather[0].main == "Fog") {
            icon3.src = "images/fog.svg";
        }
        else if(data1.list[20].weather[0].main == "Snow") {
            icon3.src = "images/snow.svg";
        }
        else if(data1.list[20].weather[0].main == "Smoke") {
            icon3.src = "images/smoke.svg";
        }
        else if(data1.list[20].weather[0].main == "Hail") {
            icon3.src = "images/hail.svg";
        } 



        if(data1.list[28].weather[0].main == "Clouds"){
            icon4.src = "images/cloud.svg";
        }
        else if(data1.list[28].weather[0].main == "Clear"){
            icon4.src = "images/clear.svg";
        }
        else if(data1.list[28].weather[0].main == "Rain") {
            icon4.src = "images/rain.svg";
        }
        else if(data1.list[28].weather[0].main == "Drizzle") {
            icon4.src = "images/drizzle.svg";
        }
        else if(data1.list[28].weather[0].main == "Mist") {
            icon4.src = "images/mist.svg";
        }
        else if(data1.list[28].weather[0].main == "Fog") {
            icon4.src = "images/fog.svg";
        }
        else if(data1.list[28].weather[0].main == "Snow") {
            icon4.src = "images/snow.svg";
        }
        else if(data1.list[28].weather[0].main == "Smoke") {
            icon4.src = "images/smoke.svg";
        }
        else if(data1.list[28].weather[0].main == "Hail") {
            icon4.src = "images/hail.svg";
        }



        if(data1.list[36].weather[0].main == "Clouds"){
            icon5.src = "images/cloud.svg";
        }
        else if(data1.list[36].weather[0].main == "Clear"){
            icon5.src = "images/clear.svg";
        }
        else if(data1.list[36].weather[0].main == "Rain") {
            icon5.src = "images/rain.svg";
        }
        else if(data1.list[36].weather[0].main == "Drizzle") {
            icon5.src = "images/drizzle.svg";
        }
        else if(data1.list[36].weather[0].main == "Mist") {
            icon5.src = "images/mist.svg";
        }
        else if(data1.list[36].weather[0].main == "Fog") {
            icon5.src = "images/fog.svg";
        }
        else if(data1.list[36].weather[0].main == "Snow") {
            icon5.src = "images/snow.svg";
        }
        else if(data1.list[36].weather[0].main == "Smoke") {
            icon5.src = "images/smoke.svg";
        }
        else if(data1.list[36].weather[0].main == "Hail") {
            icon5.src = "images/hail.svg";
        }


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