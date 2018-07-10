'use strict';

var submitRandomBetBtn = document.querySelector('.bet-random__btn');
var submitRandomBetForm = document.querySelector('.bet-random__form');
var inputRandomBet = document.querySelectorAll('.input--bet-random');
var successRandomBet = document.querySelector('.bet-random__success');

var isValid = function (evt) {
  var target = evt.target;
  if (target.value !== '' && target.checkValidity() !== false) {
    submitRandomBetBtn.removeAttribute('disabled');
  }
};

for (var i = 0; i < inputRandomBet.length; i++) {
  inputRandomBet[i].addEventListener('input', isValid);
}

submitRandomBetForm.addEventListener('submit', function (evt) {
  evt.preventDefault();

  submitRandomBetBtn.style.display = 'none';
  successRandomBet.style.display = 'block';
});
