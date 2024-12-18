
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
});
// toggle OnandOff End 


// TOC start 
/* window.addEventListener("DOMContentLoaded", () => {

    const toc = {
      headings: document.querySelectorAll('.article h1'),
      anchors: document.querySelectorAll('.main_toc_ul a')
    }
  
    toc.headings.forEach((heading, index) => {
      
      addEventListener('scroll', () => {
        
        if (scrollY > heading.offsetTop - window.innerHeight / 3) {
          if (index) {
            toc.anchors[index-1].classList.remove('active')
          }
          toc.anchors[index].classList.add('active', 'readed')
        } else {
          toc.anchors[index].classList.remove('active', 'readed')
        }
  
      })
  
    })
  
  }); */

//   TOC end  이건 나중에 react 써서 하자!


/* https://codepen.io/reatlat/pen/ExEroOZ */


// Doughnut Graph 


// Doughnut Graph End 








var transrange = document.getElementById("transportrange");
var transcost = document.getElementById("transportcost");
transcost.innerHTML = transrange.value;

transrange.oninput = function() {
  transcost.innerHTML = this.value;
}

var leirange = document.getElementById("leisurerange");
var leicost = document.getElementById("leisurecost");
leicost.innerHTML = leirange.value;

leirange.oninput = function() {
  leicost.innerHTML = this.value;
}

var drirange = document.getElementById("drinkrange");
var dricost = document.getElementById("drinkcost");
dricost.innerHTML = drirange.value;

drirange.oninput = function() {
  dricost.innerHTML = this.value;
}

var shrange = document.getElementById("shoprange");
var shcost = document.getElementById("shopcost");
shcost.innerHTML = shrange.value;

shrange.oninput = function() {
  shcost.innerHTML = this.value;
}

var travrange = document.getElementById("travelrange");
var travcost = document.getElementById("travelcost");
travcost.innerHTML = travrange.value;

travrange.oninput = function() {
  travcost.innerHTML = this.value;
}

$(function() {
  $('input[type=range]').change(getpersonaltotal); // not () - you're not calling the function
  getpersonaltotal(); // initialy call it
});

function getpersonaltotal() {
  var first = parseInt(transrange.value) || 0;
  var second = parseInt(leirange.value) || 0;
  var third = parseInt(drirange.value) || 0;
  var fourth = parseInt(shrange.value) || 0;
  var fifth = parseInt(travrange.value) || 0;
  document.getElementById("personaltotal").innerHTML = first + second + third + fourth + fifth;
}
 

// Input Start 
function UpdateCost() {
  var sum = 0;
  var gn, elem;
  for (i=0; i <=21; i++) {
    gn = 'price'+i;
    elem = document.getElementById(gn);
    if (elem.checked == true) { sum += Number(elem.value); }
  }
  document.getElementById('essentialcost').innerHTML = sum.toFixed(2);
  
} 
  // Input End
  

function getTotal() {
  let num1 = document.getElementById("personaltotal").innerHTML;
  let num2 = document.getElementById('essentialcost').innerHTML;
  document.getElementById('totalcost').innerHTML = parseInt(num1)+parseInt(num2);
}
