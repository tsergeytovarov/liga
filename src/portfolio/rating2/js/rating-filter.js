'use strict';

var filterToggle = document.querySelector('.rating-filter__toggle');
var filter = document.querySelector('.page-rating__filter');


filterToggle.addEventListener('click', function () {
  filter.classList.toggle('page-rating__aside--active');

  if (filter.getAttribute('class').includes('page-rating__aside--active')) {
    filterToggle.innerText = 'Закрыть фильтр';
  } else {
    filterToggle.innerText = 'Открыть фильтр';
  }
});
