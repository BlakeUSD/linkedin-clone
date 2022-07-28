const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    })
};

async function rainbow() {
    await delayedColorChange("red", 1000);
    await delayedColorChange("orange", 1000);
    await delayedColorChange("yellow", 1000)
    await delayedColorChange("green", 1000)
    await delayedColorChange("blue", 1000)
    await delayedColorChange("indigo", 1000)
    await delayedColorChange("violet", 1000)
}

rainbow();

//Button Functionality Section
let count = 0;
const counterText = document.getElementById("counterText");

function handleChange() {
    return counterText.innerHTML = count;
}

document.getElementById("increase").addEventListener('click', increaseCount);
function increaseCount() {
    count++;
    handleChange();
}

document.getElementById("decrease").addEventListener('click', decreaseCount);
function decreaseCount() {
    count--;
    handleChange();
}


const filterFalsy = (value) => {
    return !value;
}
const filterTruthy = (value) => {
    return !!value;
}

function isOddNum(num) {
    return num % 2 !== 0 ? true : false;
}

function isEven(num) {
    return num % 2 === 0 ? true : false;
}

function isInteger(num) {
    if (parseInt(num));
}
