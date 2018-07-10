'use strict';

var filterToggle = document.querySelector('.reviews__toggle');
var filter = document.querySelector('.reviews__form');


filterToggle.addEventListener('click', function () {
  filter.classList.toggle('reviews__form--active');

  if (filter.getAttribute('class').includes('reviews__form--active')) {
    filterToggle.classList.add('reviews__toggle--active');
    filterToggle.innerText = 'Закрыть окно';
  } else {
    filterToggle.classList.remove('reviews__toggle--active');
    filterToggle.innerText = 'Написать отзыв';
  }
});
