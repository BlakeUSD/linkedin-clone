// menu bar open and close functionality
let profileMenu = document.getElementById("profileMenu");
function toggleMenu() {
    profileMenu.classList.toggle("openMenu");
}

// mobile view open and close functionality for links
let sidebarActivity = document.getElementById("sidebarActivity");
let showMoreLink = document.getElementById("showMoreLink");

function toggleActivity() {
    sidebarActivity.classList.toggle("openActivity");

    if (sidebarActivity.classList.contains("openActivity")) {
        showMoreLink.innerHTML = "Show less <b>-</b>";
    } else {
        showMoreLink.innerHTML = "Show more <b>+</b>";
    }
}