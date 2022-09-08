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