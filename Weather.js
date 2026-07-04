
 

        const apiKey = "3f117f85b1bd7997e299880760343f98";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric&q=`;
        const searchBox = document.querySelector('.search input');
        const searchBtn = document.querySelector('.search button');
        const weatherIcon = document.querySelector('.weather-icon');

        async function checkWeather(city) {
            const response = await fetch(apiUrl + city);
            if (!response.ok) {
                throw new Error(`Weather request failed: ${response.status}`);
            }

            var data = await response.json();

            console.log(data);
            
            document.querySelector(".city").innerHTML = (data.name);
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = (data.main.humidity) + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

            const weatherType = data.weather[0].main.toLowerCase();

            if (weatherType === "clouds") {
                weatherIcon.src = "Images/clouds.png";
            } else if (weatherType === "drizzle") {
                weatherIcon.src = "Images/drizzle.png";
            } else if (weatherType === "rain") {
                weatherIcon.src = "Images/rain.png";
            } else if (weatherType === "mist") {
                weatherIcon.src = "Images/mist.png";
            } else if (weatherType === "snow") {
                weatherIcon.src = "Images/snow.png";
            } else {
                weatherIcon.src = "Images/clear.png";
            }

        }

        searchBtn.addEventListener("click", ()=>{
            checkWeather(searchBox.value);
        })
