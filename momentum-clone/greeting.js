const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

const saveName = text => {
    localStorage.setItem(USER_LS, text);
};

const handleSubmit = event => {
    event.preventDefault();
    const currentValue = input.value;
    paintGretting(timeText(), currentValue);
    saveName(currentValue);
};

const loadname = () => {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        paintGretting(timeText(), currentUser);
    }
};

const askForName = () => {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
};

const paintGretting = (timeText, user) => {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerHTML = `${timeText}, ${user}`;
};

const timeText = () => {
    const date = new Date();
    const Hour = date.getHours();
    let text = "";
    if (Hour > 6 && Hour < 12) {
        text = "Good Morning";
    } else if (Hour > 12 && Hour < 18) {
        text = "Good Afternoon";
    } else {
        text = "Good Night";
    }
    return text;
};

const greetingInit = () => {
    loadname();
    timeText();
    setInterval(timeText, 1000);
};

greetingInit();
