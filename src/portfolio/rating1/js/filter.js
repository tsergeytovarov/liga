'use strict';

(function () {
  var filterToggle = document.querySelector('.page-rating__toggle'),
      toggleHide = document.querySelector('.page-rating__hide'),
      toggleOpen = document.querySelector('.page-rating__open'),
      rating = document.querySelector('.page-rating__container'),
      filter = document.querySelector('.page-rating__aside');

  filterToggle.addEventListener('click', function () {
    toggleHide.classList.toggle('js__show');
    toggleOpen.classList.toggle('js__hide');
    filter.classList.toggle('js__show');
    rating.classList.toggle('js__hide');
  });
})();
