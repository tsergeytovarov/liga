'use strict';

var checkbox = document.querySelector('.input--checkbox');
var reviewsButton = document.querySelector('.reviews__btn');

var isChecked = function (checkbox) {
  return checkbox.checked;
};

checkbox.addEventListener('change', function () {
  if (reviewsButton.hasAttribute('disabled') && isChecked(checkbox)) {
    reviewsButton.removeAttribute('disabled');
  } else {
    reviewsButton.setAttribute('disabled', true);
  }
});

