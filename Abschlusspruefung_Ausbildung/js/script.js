// overlay mobile
function dropdown() {
    document.getElementsByClassName("burger");
}

dropdown();


var overlay = document.querySelector('.overlay');
var hamburger = document.querySelector('.burger');
var close = document.querySelector('.close');

hamburger.addEventListener('click', function () {
   overlay.classList.add('open'); 
});

close.addEventListener('click', function () {
    overlay.classList.remove('open'); 
});

/* ===== SLIDER ===== */
/* change button text */
var change1 = document.querySelector('.toggle-button-one');
var change2 = document.querySelector('.toggle-button-two');
var change3 = document.querySelector('.toggle-button-three');

change1.addEventListener('click', handleToggleBtnClick);
change2.addEventListener('click', handleToggleBtnClick);
change3.addEventListener('click', handleToggleBtnClick);

function handleToggleBtnClick (event) {
    var container = event.target.parentNode.parentNode;

    if (event.target.value=="Rezept anzeigen"){ 
        event.target.value = "Rezept ausblenden";
        container.classList.add('open');
    }
    else {
        event.target.value = "Rezept anzeigen";
        container.classList.remove('open');
    }
 }

/* swipe */
var element = document.querySelector('#mySwipe');
var dot1 = document.querySelector('.dot1');
var dot2 = document.querySelector('.dot2');
var dot3 = document.querySelector('.dot3');

window.mySwipe = new Swipe(element, {
  startSlide: 0,
  auto: 0,
  draggable: true,
  autoRestart: false,
  continuous: true,
  disableScroll: true,
  stopPropagation: true,
  callback: function(index, element) {
    dot1.classList.remove('active');
    dot2.classList.remove('active');
    dot3.classList.remove('active');
    if (index == 0) {
        dot1.classList.add('active');
    } 
    else if (index == 1) {
        dot2.classList.add('active');    
    }
    else if (index == 2) {
       dot3.classList.add('active');     
    }
  },
  transitionEnd: function(index, element) {}
});