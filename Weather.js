
 

        const apiKey = "3f117f85b1bd7997e299880760343f98";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric&q=`;
        const searchBox = document.querySelector('.search input');
        const searchBtn = document.querySelector('.search button');

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

        }

        searchBtn.addEventListener("click", ()=>{
            checkWeather(searchBox.value);
        })
