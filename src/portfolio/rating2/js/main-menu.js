'use strict';

var menuToggle = document.querySelector('.page-header__toggle');
var menu = document.querySelector('.main-nav');

menuToggle.addEventListener('click', function () {
  menu.classList.toggle('main-nav--visible');
});
