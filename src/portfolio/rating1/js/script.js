'use strict';

(function () {
  var menuToggleOpen = document.querySelector('.page-header__button--open');
  var menuToggleClose = document.querySelector('.page-header__button--close');
  var menuContainer = document.querySelector('.page-header__wrapper-inner');

  menuToggleOpen.addEventListener('click', function () {
    menuContainer.classList.add('page-header__wrapper-inner--opened');
  });

  menuToggleClose.addEventListener('click', function () {
    menuContainer.classList.remove('page-header__wrapper-inner--opened');
  });

  var sliderPrevious = document.querySelector('.slider__control--previous');
  var sliderNext = document.querySelector('.slider__control--next');
  var currentTransform = 0;
  var sliderWidth = document.querySelector('#sliderCard').style.width;

  function sliderClickHandler (evt) {
    var sliderBody = document.querySelector('.slider__list');
    var event = evt.target.getAttribute('class');
    if (event.includes('previous') && currentTransform !== 0) {
      currentTransform += parseInt(sliderWidth) + 30;
    } else if (event.includes('next')) {
      currentTransform -= parseInt(sliderWidth) + 30;
    }
    sliderBody.style.transform = 'translateX('+ currentTransform + 'px)';
  }

  sliderNext.addEventListener('click', sliderClickHandler);
  sliderPrevious.addEventListener('click', sliderClickHandler);

  var showOverview = document.querySelector('.bookmaker-overview__show');

  showOverview.addEventListener('click', function() {
    var overview = document.querySelector('.bookmaker-overview__accordion');
    var showOverviewInnerText = 'Свернуть описание и инструкцию';

    if (this.innerText === showOverviewInnerText) {
      this.innerText = 'Развернуть описание и инструкцию';
      overview.style.display = 'none';
    } else {
      this.innerText = showOverviewInnerText;
      overview.style.display = 'block';
    }
  });

  var modalWindow = document.querySelector('.comments-modal');
  var closeModalButton = modalWindow.querySelector('.comment-modal__close-btn');
  var showModalButton = document.querySelector('.button__comment');
  var sendModal = modalWindow.querySelector('.button__send-modal');
  var successModal = modalWindow.querySelector('.comments-modal__success');
  var modalForm = modalWindow.querySelector('.comments-modal__form');

  showModalButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalWindow.classList.add('comments-modal--opened');
  });

  closeModalButton.addEventListener('click', function (evt) {
    modalWindow.classList.remove('comments-modal--opened');
  });

  sendModal.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalForm.classList.add('comments-modal__form--hidden');
    successModal.classList.add('comments-modal__success--visible');
  });
})();
