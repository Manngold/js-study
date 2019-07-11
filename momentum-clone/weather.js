const weather = document.querySelector(".js-weather");
const COORDS = "coords";
const API_KEY = "dd4921796c965b0ccbba3efc67e8b7f7";

const getWeather = (lat, lng) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric
    `)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            const temperature = Math.floor(json.main.temp),
                description = json.weather[0].description,
                place = json.name;
            weather.innerText = `${place} temperature is ${temperature}℃ and ${description}`;
        });
};

const saveCoords = coordsObj => {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
};

const handleGeoSuccess = position => {
    console.log(position);
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
