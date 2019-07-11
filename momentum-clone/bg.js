const body = document.querySelector("body");

IMG_NUMBER = 3;

const paintImage = imgNumber => {
    const image = new Image();
    image.src = `./images/${imgNumber}.jpg`;
    body.appendChild(image);
    image.classList.add("bgImage");
};

const getRandom = () => {
    const number = Math.floor(Math.random() * IMG_NUMBER) + 1;
    return number;
};

const bgInit = () => {
    const randomNumber = getRandom();
    paintImage(randomNumber);
};

bgInit();
