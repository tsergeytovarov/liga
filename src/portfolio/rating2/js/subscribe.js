'use strict';

var subscribeForm = document.querySelector('.subscribe__form');
var subscribeContainer = document.querySelector('.subscribe__container');
var subscribeSuccessMsg = document.querySelector('.subscribe__alert');

subscribeForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  subscribeContainer.style.display = 'none';
  subscribeSuccessMsg.style.display = 'block';
});
