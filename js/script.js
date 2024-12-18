// Spinner Start 
var loadingMessage = document.getElementById("loading-wrap");

function showPage() {
    loadingMessage.style.display ="none";
}
function stopSpin() {
    setTimeout(showPage, 500);
}
// Spinner End 

// toggle Onandoff Start 
const toggleBtn = document.querySelector('.navbar_toggleBtn');
const menu = document.querySelector('.navbar_menu');
const links = document.querySelector('.navbar_links');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    links.classList.toggle('active');
})
// toggle OnandOff End 

