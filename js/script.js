

const weatherApi = {
    key : "3417a2c8259db8a29ecb16f3e23199db" ,
    baseUrl : "https://api.openweathermap.org/data/2.5/weather"
}

const searchInput = document.getElementById("input-box");
searchInput.addEventListener('keypress', (event)=>{
    
    if(event.keyCode == 13 ) {
        console.log(searchInput.value);
        getweatherreport(searchInput.value)
        document.getElementById('weather-body').style.display = "block";
    } 
});

function getweatherreport(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json()
    }).then(showWeatherReport);
}

function showWeatherReport(weather){
    console.log(weather)

    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`

    let temp = document.getElementById('temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}&deg;c`;

    let minmaxtemp = document.getElementById('min-max');
    minmaxtemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;c (min) / ${Math.ceil(weather.main.temp_max)}&deg;c (max)`;

    let weathertype = document.getElementById("weather");
    weathertype.innerHTML = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    todaydate = new Date;
    date.innerText = dateManage(todaydate);

    if(weathertype.textContent == 'Clouds'){
        console.log("manish")
        document.body.style.backgroundImage = "url('img/cloud.jpeg')";
    }
    else if(weathertype.textContent == 'Haze'){
        console.log("manish")
        document.body.style.backgroundImage = "url('img/haze.jpeg')";
    }
    else if(weathertype.textContent == 'Clear'){
        console.log("manish")
        document.body.style.backgroundImage = "url('img/clr.jpeg')";
    }
    else if(weathertype.textContent == 'Thunderstorm'){
        console.log("manish")
        document.body.style.backgroundImage = "url('img/haze.jpeg')";
    }
    else if(weathertype.textContent == 'Rain'){
        console.log("manish")
        document.body.style.backgroundImage = "url('img/rain.webp')";
    }
    else if(weathertype.textContent == 'Mist'){
        console.log("manish")
        document.body.style.backgroundImage = "url('img/mist.jpeg')";
    }
    else{
        document.body.style.backgroundImage = "url('img/def.jpeg')";
    }
}

function dateManage(setdate){
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let year = setdate.getFullYear();
    let month = months[setdate.getMonth()];
    let date = setdate.getDate();
    let day = days[setdate.getDay()];

    return `${date} ${month} (${day}), ${year}`;
}