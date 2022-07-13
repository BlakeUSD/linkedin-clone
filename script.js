const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    })
};

async function rainbow() {
    await delayedColorChange("red", 1000)
    await delayedColorChange("orange", 1000)
    await delayedColorChange("yellow", 1000)
    await delayedColorChange("green", 1000)
    await delayedColorChange("blue", 1000)
    await delayedColorChange("indigo", 1000)
    await delayedColorChange("violet", 1000)
}

rainbow();

//Button Functionality
let count = 0;
document.getElementById("increase").addEventListener('click', increaseCount)
function increaseCount() {
    count++;
    console.log(count);
}

document.getElementById("decrease").addEventListener('click', decreaseCount)
function decreaseCount() {
    count--;
    console.log(count);
}

const filterFalsy = (value) => {
    return !value;
}
const filterTruthy = (value) => {
    return !!value;
}

function isOdd(num) {
    return num%2 !== 0 ? true : false;
}

function isEven(num) {
    //do something
}