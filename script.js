const searchInput = document.getElementById("search_input");
const veiwButton = document.getElementById("search_button");
const weatherImage = document.getElementById("weather_image");
const temperatureBlock = document.getElementById("temperature");
const season = document.getElementById("season");
const wind = document.getElementById("wind");
const humidity = document.getElementById("humidity");
const precipitation = document.getElementById("precipitation")

init();

function init(){
       veiwButton.addEventListener("click" , getApi);
}


async function getApi(){
    let location = searchInput.value;
    const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=e1a19f6c656159a30867b281b7dabd3a`);
    const textBody = await api.text();
    const jsonData = JSON.parse(textBody);
    console.log(jsonData);
    //console.log(jsonData.main.temp);
    const weatherDescription = jsonData.weather[0].description
    const weatherIcon = jsonData.weather[0].icon
    const temperature = jsonData.main.temp
    const humidity = jsonData.main.humidity
    const windSpeed = jsonData.wind.speed
    console.log(windSpeed);
    const cloudiness = jsonData.clouds.all
    season.innerText = weatherDescription
    weatherImage.setAttribute('src', `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`)
    temperatureBlock.innerHTML = `${temperature}&deg;F`;
    wind.innerText = `${windSpeed}km`;
    humidity.innerText = `${humidity}`;
    precipitation.innerText = `${cloudiness}%`;
}