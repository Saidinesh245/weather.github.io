const apiKey="413f4d244c045fc9f9ab4ac4432d6746";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric";
document.getElementById("weather-icon-box").innerHTML="";

async function checkWeather(){
    var city = document.getElementById("input-field").value;

    if(city==""){
        city="toronto";
        document.getElementById("input-field").value="Toronto";
    }
    
    const response = await fetch(apiUrl + `&appid=${apiKey}` + `&q=${city}`);  // change this usig the'$' 
    var data = await response.json();
    var description = data.weather[0].main;

    console.log(data);

    var temprature = Math.round(data.main.temp);
    document.querySelector(".weather-temp").innerHTML = temprature + " °C";
    document.querySelector(".weather-note").innerHTML = data.weather[0].main ;

    if(description == "Clouds"){
        document.querySelector(".weather-icon").src="cloud.png";
    }
    else if(description == "Clear"){
        document.querySelector(".weather-icon").src="day-and-night.png";
    }
    else if(description == "Rain"){
        document.querySelector(".weather-icon").src="rain.png";
    }
    else if(description == "Snow"){
        document.querySelector(".weather-icon").src="snow.png";
    }
    else if(description== "Haze"){
        document.querySelector(".weather-icon").src="haze.png"
    }
    else if(description== "Mist"){
        document.querySelector(".weather-icon").src="mist.png"
    }
}
checkWeather();
