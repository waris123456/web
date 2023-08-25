// JavaScript - By Abdul Waris [Orignal]
const audio = new Audio("");
audio.play();

let resNav = document.getElementById("resNav")
let resBtn = document.getElementById("resBtn")
let nav = document.getElementById("nav")

function toggleNav() {
    if (resNav.style.display === "unset") {
        resNav.style.display = "none"
        nav.style.height = "80px"
    }
    else {
        resNav.style.display = "unset"
        nav.style.height = "410px"
    }
}