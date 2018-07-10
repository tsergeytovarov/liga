// navbar script
var siteHeader = document.querySelector('.site-header');
var siteHeaderButton = siteHeader.querySelector('.site-header__button');
var siteHeaderWrapper = siteHeader.querySelector('.site-header__wrapper');
var flexWrapper = document.querySelector('.flex-wrapper');

siteHeaderButton.addEventListener('click', function() {
  siteHeaderButton.classList.toggle('site-header__button--close');

  if (siteHeaderButton.classList.contains('site-header__button--close')) {
    siteHeader.classList.remove('site-header--close-menu');
    siteHeaderWrapper.classList.remove('site-header__wrapper--hidden');
  } else {
    siteHeader.classList.add('site-header--close-menu');
    siteHeaderWrapper.classList.add('site-header__wrapper--hidden');
  }
  
  if(siteHeader.classList.contains('site-header--close-menu')) {
    flexWrapper.classList.remove('flex-wrapper--padding');
  } else {
    flexWrapper.classList.add('flex-wrapper--padding');
  }
});

// calc script
var calcForm = document.querySelector('.calc__form');
var tariff = calcForm.querySelector('#tariff');
var invest = calcForm.querySelector('#invest');
var term = calcForm.querySelector('#term');
var income = calcForm.querySelector('#income');
var profit = calcForm.querySelector('#profit');
var calcButton = calcForm.querySelector('#calc-button');
var formSubmit = calcForm.querySelector('#submit-button');

var selectTariff = function () {
  var tariffValue = null;

  switch (tariff.value) {
    case 'start':
      tariffValue = 0.75;
      break;
    case 'medium':
      tariffValue = 1;
      break;
    case 'premium':
      tariffValue = 1.25;
      break;
    case 'unlimit':
      tariffValue = 2.5;
      break;
  }

  return tariffValue;
}

tariff.addEventListener('change', function () {
  if (selectTariff() === 0.75) {
    term.value = 25;
    invest.min = 25;
    term.setAttribute('readonly', '');
    invest.setAttribute('placeholder', '25$ - 250$');
    invest.value = '';
    income.value = '';
    profit.value = '';
  } else if (selectTariff() === 1) {
    term.value = 50;
    invest.min = 250;
    term.setAttribute('readonly', '');
    invest.setAttribute('placeholder', '250$ - 750$');
    invest.value = '';
    income.value = '';
    profit.value = '';
  } else if (selectTariff() === 1.25) {
    term.value = 75;
    invest.min = 750;
    term.setAttribute('readonly', '');
    invest.setAttribute('placeholder', 'от 750$');
    invest.value = '';
    income.value = '';
    profit.value = '';
  } else if (selectTariff() === 2.5) {
    term.value = '';
    term.setAttribute('placeholder', 'бессрочно');
    term.setAttribute('min', '1');
    term.removeAttribute('readonly', '');
    invest.min = 25;
    invest.setAttribute('placeholder', '25$ - 999999$');
    invest.value = '';
    income.value = '';
    profit.value = '';
  }
});

calcButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  
  if (term.validity.valueMissing) {
    term.classList.add('form__input--error');
  } else if (invest.validity.valueMissing || invest.validity.rangeUnderflow) {
    invest.classList.add('form__input--error');
  } else if (parseInt(invest.value, 10) >= parseInt(invest.min, 10)) {
    invest.classList.remove('form__input--error');
    term.classList.remove('form__input--error');
    income.value = parseInt(invest.value, 10) + (parseInt(invest.value, 10) / 100) * selectTariff() * parseInt(term.value, 10);
    profit.value = income.value - parseInt(invest.value, 10);
  }
});

var cancelEnterSubmit = function (evt) {
  if (evt.keyCode === 13) {
    evt.preventDefault();
  }
};

formSubmit.addEventListener('keydown', cancelEnterSubmit);
calcForm.addEventListener('keydown', cancelEnterSubmit);
