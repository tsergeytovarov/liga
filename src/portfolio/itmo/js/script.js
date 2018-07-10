var body = document.querySelector('body');
var main =document.querySelector('main');
var pageHeader = document.querySelector('.page-header');
var menu = pageHeader.querySelector('.main-nav');
var menuBtn = menu.querySelector('.main-nav__toggle');
var versionArea = pageHeader.querySelector('.version');
var versionBtns = pageHeader.querySelectorAll('.version__link');
var sliderBtns = document.querySelectorAll('.slick-arrow');

function switchVersion(evt) {
  if (Array.from(versionBtns).indexOf(evt.target) !== -1) {
    body.classList.toggle('poor-vision');
  }
}

function resetSlider() {
  if (!main.classList.contains('faculty-content')) {
    sliderBtns[0].style = '';
    sliderBtns[1].style = '';
  }
}

menu.classList.add('main-nav--closed');
menuBtn.classList.remove('main-nav__toggle--nojs');

menuBtn.addEventListener("click", function(event) {
  event.preventDefault();
  menu.classList.toggle("main-nav--closed");
});

versionArea.addEventListener('click', function(evt) {
  switchVersion(evt);
});

document.addEventListener('DOMContentLoaded', resetSlider);
