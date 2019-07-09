const clock = document.querySelector(".js-clock"),
    clockTitle = clock.querySelector("h1");

const getTime = () => {
    const date = new Date(),
        Hour = date.getHours(),
        Minute = date.getMinutes(),
        Seconds = date.getSeconds();

    clockTitle.innerHTML = `${Hour < 10 ? `0${Hour}` : Hour} : ${
        Minute < 10 ? `0${Minute}` : Minute
    } : ${Seconds < 10 ? `0${Seconds}` : Seconds}`;
};

const clockInit = () => {
    getTime();
    setInterval(getTime, 1000);
};

clockInit();
