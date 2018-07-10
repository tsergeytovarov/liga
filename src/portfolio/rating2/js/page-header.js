'use strict';

var pageHeader = document.querySelector('.page-header');
var body = document.querySelector('body');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 0) {
    pageHeader.classList.add('page-header--fixed');
    body.style.paddingTop = '65px';
  } else if (window.pageYOffset === 0) {
    pageHeader.classList.remove('page-header--fixed');
    body.style.paddingTop = '0';
  }
});
