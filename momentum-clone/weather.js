const weather = document.querySelector(".js-weather"),
    COORDS = "coords",
    API_KEY = "dd4921796c965b0ccbba3efc67e8b7f7";

const getWeather = (lat, lng) => {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    )
        .then(response => response.json())
        .then(json => {
            const temperature = Math.floor(json.main.temp);
            const description = json.weather[0].description;
            const place = json.name;
            weather.innerHTML = `${place}'s temperature is ${temperature}, ${description}`;
        });
};

const saveCoords = coords => {
    localStorage.setItem(COORDS, JSON.stringify(coords));
};

const handleGeoSuccess = position => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const coordsObj = {
        latitude,
        longitude
    };

    saveCoords(coordsObj);
    getWeather(latitude, longitude);
};

const handleGeoFailed = error => {
    console.log(error);
};

const askForCoords = () => {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoFailed);
};

const loadCoords = () => {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
};

const weatherInit = () => {
    loadCoords();
};

weatherInit();
