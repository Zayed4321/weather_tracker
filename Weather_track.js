const srchBtn = document.getElementById("srchBtn");

srchBtn.addEventListener('click', async function(){
    const userInput = document.getElementById("userInput").value;
    const myAPI = "1fcc85814f46a981432531c7c114f15b";

    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${myAPI}`);

    let weatherData = await response.json();
    
    let nameOfCity = document.getElementById("nameOfCity").innerHTML = weatherData.name;

    function ktoC(n1) {
        return parseInt(n1 - 273.15);
    }

    let weatherTemp = ktoC(weatherData.main.temp);

    let celsiusNum = document.getElementById("celsiusNum").innerHTML = weatherTemp + "°C";

    let weatherdesc = document.getElementById("weatherdesc").innerHTML = weatherData.weather[0].description;

    let weatherwind = document.getElementById("weatherwind").innerHTML = weatherData.wind.speed + " km/h";
    
    let weatherhumidity = document.getElementById("weatherhumidity").innerHTML = weatherData.main.humidity + " %";

    console.log(weatherData);


})

// This is the right process to use the ENTER key in Javascript

const userInput2 = document.getElementById("userInput");

userInput2.addEventListener("keyup", function(event){
    event.preventDefault();
    if(event.keyCode === 13){
        srchBtn.click();
    }
})


