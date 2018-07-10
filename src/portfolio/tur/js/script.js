'use strict'
// expand search category buttons
var sortBtnContainer = document.querySelector('.campings__sort-btn');
var sortBtnToggleContainer = document.querySelector('.campings__dropdown');
var sortBtnToggle = document.querySelector('.campings__btn');

var expandSortBtnContainer = function () {
  sortBtnToggle.addEventListener('click', function(evt) {
    evt.preventDefault();
    sortBtnToggleContainer.classList.toggle('campings__dropdown--open');
    sortBtnContainer.classList.toggle('campings__sort-btn--auto');
  });
};

// toggle sorting btns
var sortBtn = document.querySelectorAll('.sorting__link');

var deleteSortBtnActiveClass = function () {
  var sortBtnActive = document.querySelector('.sorting__link--active');

  if (sortBtnActive !== null) {
    sortBtnActive.classList.remove('sorting__link--active');
  }
};

var toggleActiveSortBtn = function () {
  for (var i = 0; i < sortBtn.length; i++) {
    sortBtn[i].addEventListener('click', function(evt) {
      evt.preventDefault();

      deleteSortBtnActiveClass();
      this.classList.add('sorting__link--active');
    })
  }
};

// show entry link
var showEntryLink = function() {
  var price = document.querySelectorAll('.hike__details-price');
  var hikeEntryLink = document.querySelectorAll('.hike__details-btn');

  for (var i = 0; i < price.length; i++) {
    price[i].setAttribute('data-index', i);
    
    price[i].addEventListener('mouseenter', function(evt) {
      var target = evt.target;
      var indexPrice = evt.currentTarget.getAttribute('data-index');
      
      target.classList.toggle('hike__details-price--low-index');
      hikeEntryLink[indexPrice].classList.remove('hike__details-btn--low-index');
    })
  }
  
  for (var i = 0; i < hikeEntryLink.length; i++) {
    hikeEntryLink[i].setAttribute('data-index', i);
    
    hikeEntryLink[i].addEventListener('mouseleave', function(evt) {
      var target = evt.target;
      var indexhikeEntryLink = evt.currentTarget.getAttribute('data-index');
      
      target.classList.add('hike__details-btn--low-index');
      price[indexhikeEntryLink].classList.remove('hike__details-price--low-index');
    })
  }
};

// toggle paginator pages
var paginatorLink = document.querySelectorAll('.paginator__link');

var deletePaginatorLinkActiveClass = function () {
  var paginatorLinkActive = document.querySelector('.paginator__link--active');

  if (paginatorLinkActive !== null) {
    paginatorLinkActive.classList.remove('paginator__link--active');
  }
};

var toggleActivePaginatorLink = function () {
  for (var i = 0; i < paginatorLink.length; i++) {
    paginatorLink[i].addEventListener('click', function(evt) {
      evt.preventDefault();

      deletePaginatorLinkActiveClass();
      this.classList.add('paginator__link--active');
    })
  }
};

// show about us popups
var aboutPopupBtn = document.querySelectorAll('.team__card > a');
var aboutPopup = document.querySelectorAll('.team__popup');
var aboutPopupCloseBtn = document.querySelectorAll('.team__close');
var overlay = document.querySelector('.overlay');

var hideAboutOverlay = function(evt) {
  evt.preventDefault();
  overlay.classList.remove('overlay--visible');

  for (var i = 0; i < aboutPopup.length; i++) {
    aboutPopup[i].setAttribute('data-index', i);
  }

  var aboutPopupActive = document.querySelector('.team__popup--open');

  aboutPopupActive.classList.remove('team__popup--open');
};

var openAboutPopup = function() {
  for (var i = 0; i < aboutPopupBtn.length; i++) {
    aboutPopupBtn[i].setAttribute('data-index', i);

    aboutPopupBtn[i].addEventListener('click', function(evt) {
      evt.preventDefault();
      overlay.classList.add('overlay--visible');

      overlay.addEventListener('click', hideAboutOverlay);

      var indexAboutPopupBtn = evt.currentTarget.getAttribute('data-index');

      aboutPopup[indexAboutPopupBtn].classList.add('team__popup--open');
    })
  }
};

var closeaboutPopup = function() {
  for (var i = 0; i < aboutPopupCloseBtn.length; i++) {
    aboutPopupCloseBtn[i].setAttribute('data-index', i);

    aboutPopupCloseBtn[i].addEventListener('click', function(evt) {
      evt.preventDefault();
      overlay.classList.remove('overlay--visible');
      overlay.removeEventListener('click', hideAboutOverlay);

      var indexAboutPopupCloseBtn = evt.currentTarget.getAttribute('data-index');

      aboutPopup[indexAboutPopupCloseBtn].classList.remove('team__popup--open');
    })
  }
};

// show subcribe popups
var showSubscribePopups = function() {
  var subscribePopup = document.querySelector('.popup--subscribe');
  var subscribePopupForm = document.querySelector('.form--subscribe');
  var subscribePopupThanks = document.querySelector('.popup--subscribe-thanks');
  var subscribePopupOpenBtn = document.querySelector('.main-footer__subscribe');
  var subscribePopupCloseBtn = document.querySelector('.popup__close--subscribe');
  var subscribeThanksPopupFirstCloseBtn = document.querySelector('.popup__close--subscribe-thanks');
  var subscribeThanksPopupSecondCloseBtn = document.querySelector('.popup__btn--subscribe-thanks-close');
  var overlay = document.querySelector('.overlay');

  var hideSubscribeOverlay = function(evt) {
    evt.preventDefault();
    overlay.classList.remove('overlay--visible');
    subscribePopup.classList.add('popup--hidden');
  };

  var hideSubscribeThanksOverlay = function(evt) {
    evt.preventDefault();
    overlay.classList.remove('overlay--visible');
    subscribePopupThanks.classList.add('popup--hidden');
  };

  subscribePopupOpenBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    subscribePopup.classList.remove('popup--hidden');
    overlay.classList.add('overlay--visible');
    overlay.addEventListener('click', hideSubscribeOverlay);
  });

  subscribePopupCloseBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    subscribePopup.classList.add('popup--hidden');
    overlay.classList.remove('overlay--visible');
    overlay.removeEventListener('click', hideSubscribeOverlay);
  });

  subscribePopupForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    subscribePopup.classList.add('popup--hidden');
    subscribePopupThanks.classList.remove('popup--hidden');
    overlay.addEventListener('click', hideSubscribeThanksOverlay);
  });

  subscribeThanksPopupFirstCloseBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    subscribePopupThanks.classList.add('popup--hidden');
    overlay.removeEventListener('click', hideSubscribeThanksOverlay);
    overlay.classList.remove('overlay--visible');
  });

  subscribeThanksPopupSecondCloseBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    subscribePopupThanks.classList.add('popup--hidden');
    overlay.removeEventListener('click', hideSubscribeThanksOverlay);
    overlay.classList.remove('overlay--visible');
  });
};

// header search form script
var showHeaderSearchForm = function() {
  var headerSearchForm = document.querySelector('.search');
  var headerSearchLabel = headerSearchForm.querySelector('.search__label');
  var headerSearchInput = headerSearchForm.querySelector('.search__input');
  var headerSearchReset = document.querySelector('.search__btn');

  headerSearchLabel.addEventListener('click', function(evt) {
    evt.preventDefault();
    headerSearchLabel.classList.add('search__label--absolute');
    headerSearchInput.classList.remove('search__input--hidden');
    headerSearchReset.classList.remove('search__btn--hidden');
    headerSearchInput.focus();
  });
  
  headerSearchReset.addEventListener('click', function(evt) {
    evt.preventDefault();
    headerSearchLabel.classList.remove('search__label--absolute');
    headerSearchInput.classList.add('search__input--hidden');
    headerSearchReset.classList.add('search__btn--hidden');
  });

  headerSearchForm.addEventListener('submit', function(evt) {
    headerSearchLabel.classList.remove('search__label--absolute');
    headerSearchInput.classList.add('search__input--hidden');
    headerSearchReset.classList.add('search__btn--hidden');
  });
};

// campings select form
var selectCampings = function() {
  var body = document.querySelector('body');
  var campingSelectForm = document.querySelector('.main__form');
  var campingSelectContainer1 = campingSelectForm.querySelector('.select__column--1 .select__control');
  var campingSelectContainer2 = campingSelectForm.querySelector('.select__column--2 .select__control');
  var campingSelectContainer3 = campingSelectForm.querySelector('.select__column--3 .select__control');
  var campingSelectDropdown1 = campingSelectForm.querySelector('.select__column--1 .select__options');
  var campingSelectDropdown2 = campingSelectForm.querySelector('.select__column--2 .select__options');
  var campingSelectDropdown3 = campingSelectForm.querySelector('.select__column--3 .select__options');
  var campingSelectItemDefault1 = campingSelectForm.querySelector('.select__column--1 .select__item');
  var campingSelectItemDefault2 = campingSelectForm.querySelector('.select__column--2 .select__item');
  var campingSelectItemDefault3 = campingSelectForm.querySelector('.select__column--3 .select__item');

  campingSelectContainer1.addEventListener('click', function(evt) {
    evt.preventDefault();
    campingSelectDropdown1.classList.toggle('select__options--expand');
    campingSelectItemDefault1.classList.toggle('select__item--rotate');
  });

  campingSelectContainer2.addEventListener('click', function(evt) {
    evt.preventDefault();
    campingSelectDropdown2.classList.toggle('select__options--expand');
    campingSelectItemDefault2.classList.toggle('select__item--rotate');
  });

  campingSelectContainer3.addEventListener('click', function(evt) {
    evt.preventDefault();
    campingSelectDropdown3.classList.toggle('select__options--expand');
    campingSelectItemDefault3.classList.toggle('select__item--rotate');
  });
  
  body.addEventListener('click', function(evt) {
    if(!evt.target.matches('.select__column--1, .select__column--1 *')) {
      campingSelectDropdown1.classList.remove('select__options--expand');
      campingSelectItemDefault1.classList.remove('select__item--rotate');
    }
    
    if(!evt.target.matches('.select__column--2, .select__column--2 *')) {
      campingSelectDropdown2.classList.remove('select__options--expand');
      campingSelectItemDefault2.classList.remove('select__item--rotate');
    }
    
    if(!evt.target.matches('.select__column--3, .select__column--3 *')) {
      campingSelectDropdown3.classList.remove('select__options--expand');
      campingSelectItemDefault3.classList.remove('select__item--rotate');
    }
  });
};

// main nav script
var controlMainNav = function() {
  var navOverlay = document.querySelector('.overlay');
  var mainNav = document.querySelector('.nav');
  var mainNavControlBtn = mainNav.querySelector('.nav__btn');
  var mainNavNote = mainNav.querySelector('.nav__note');
  var mainNavList = mainNav.querySelector('.nav__list');
  var mainNavSublistBtn1 = mainNav.querySelector('.nav__arrow--1');
  var mainNavSublistBtn2 = mainNav.querySelector('.nav__arrow--2');
  var mainNavSublist1 = mainNav.querySelector('.nav__sublist--1');
  var mainNavSublist2 = mainNav.querySelector('.nav__sublist--2');
  var mainNavSearch = document.querySelector('.main-header__search');
  var mainNavSearchInput = document.querySelector('.search__input');
  var mainHeaderContacts = document.querySelector('.main-header__contacts');
  var headerVk = mainHeaderContacts.querySelector('.vk');
  var headerPhone = mainHeaderContacts.querySelector('.phone');

  mainNavControlBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    navOverlay.classList.toggle('overlay--nav');
    mainNavControlBtn.classList.toggle('nav__btn--cross');
    mainNavNote.classList.toggle('nav__note--hidden');
    mainNavList.classList.toggle('nav__list--expand');
    mainNavSearch.classList.toggle('main-header__search--visible');
    mainNavSearchInput.classList.toggle('search__input--hidden');
    mainHeaderContacts.classList.toggle('main-header__contacts--visible');
    headerVk.classList.toggle('vk--mobile-nav');
    headerPhone.classList.toggle('phone--mobile-nav');
  });

  mainNavSublistBtn1.addEventListener('click', function(evt) {
    evt.preventDefault();
    mainNavSublistBtn1.classList.toggle('nav__arrow--active');
    mainNavSublist1.classList.toggle('nav__sublist--visible');
  });

  mainNavSublistBtn2.addEventListener('click', function(evt) {
    evt.preventDefault();
    mainNavSublistBtn2.classList.toggle('nav__arrow--active');
    mainNavSublist2.classList.toggle('nav__sublist--visible');
  });
}

// show hike select
var showHikeSelect = function() {
  var body = document.querySelector('body');
  var hikeSelectContainer = document.querySelector('.hike__select-container');
  var hikeSelectDropdown = document.querySelector('.hike__select-dropdown');

  hikeSelectContainer.addEventListener('click', function(evt) {
    evt.preventDefault();
    hikeSelectDropdown.classList.toggle('hike__select-dropdown--open');
  });

  body.addEventListener('click', function(evt) {
    if(!evt.target.matches('.hike__select-container, .hike__select-container *')) {
      hikeSelectDropdown.classList.remove('hike__select-dropdown--open');
    }
  });
};

// toggle filter buttons
var filterSwitchBtn = document.querySelectorAll('.switch');

var deletefilterSwitchBtnActiveClass = function () {
  var filterSwitchBtnActive = document.querySelector('.switch--active');

  if (filterSwitchBtnActive !== null) {
    filterSwitchBtnActive.classList.remove('switch--active');
  }
};

var toggleActivefilterSwitchBtn = function () {
  for (var i = 0; i < filterSwitchBtn.length; i++) {
    filterSwitchBtn[i].addEventListener('click', function(evt) {
      evt.preventDefault();

      deletefilterSwitchBtnActiveClass();
      this.classList.add('switch--active');
    })
  }
};

// control mobile hike sections
var controlHikeSections = function () {
  var equipmentBase = document.querySelector('.hike__equipment-header--base');
  var equipmentBaseExpand = equipmentBase.querySelector('.hike__equipment-expand');
  var equipmentBaseShare = equipmentBase.querySelector('.btn--share');
  var equipmentBasePrint = equipmentBase.querySelector('.btn--print');
  var equipmentBaseDropdown = document.querySelector('.hike__equipment-dropdown--base');

   equipmentBase.addEventListener('click', function(evt) {
     evt.preventDefault();

     equipmentBaseExpand.classList.toggle('hike__equipment-expand--open');
     equipmentBaseDropdown.classList.toggle('hike__equipment-dropdown--hidden');
     equipmentBaseShare.classList.toggle('btn--hidden');
     equipmentBasePrint.classList.toggle('btn--hidden');
   });

  var equipmentAdvanced = document.querySelector('.hike__equipment-header--advanced');
  var equipmentAdvancedExpand = equipmentAdvanced.querySelector('.hike__equipment-expand');
  var equipmentAdvancedShare = equipmentAdvanced.querySelector('.btn--share');
  var equipmentAdvancedPrint = equipmentAdvanced.querySelector('.btn--print');
  var equipmentAdvancedDropdown = document.querySelector('.hike__equipment-dropdown--advanced');

   equipmentAdvanced.addEventListener('click', function(evt) {
     evt.preventDefault();

     equipmentAdvancedExpand.classList.toggle('hike__equipment-expand--open');
     equipmentAdvancedDropdown.classList.toggle('hike__equipment-dropdown--hidden');
     equipmentAdvancedShare.classList.toggle('btn--hidden');
     equipmentAdvancedPrint.classList.toggle('btn--hidden');
   });

  var hikeDescribeBtn = document.querySelector('.hike__equipment-expand--describe');
  var hikeDescribeBlock1 = document.querySelector('.hike__info-wrapper');
  var hikeDescribeBlock2 = document.querySelector('.hike__details');
  var hikeDescribeBlock3 = document.querySelector('.hike__text');

  hikeDescribeBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    hikeDescribeBtn.classList.toggle('hike__equipment-expand--open');
    hikeDescribeBlock1.classList.toggle('hike__info-wrapper--hidden');
    hikeDescribeBlock2.classList.toggle('hike__details--hidden');
    hikeDescribeBlock3.classList.toggle('hike__text--hidden');
  });

  var hikeVideoBtn = document.querySelector('.hike__equipment-expand--video');
  var hikeVideoBlock1 = document.querySelector('.hike__video');
  var hikeVideoBlock2 = document.querySelector('.hike__photos');

  hikeVideoBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    hikeVideoBtn.classList.toggle('hike__equipment-expand--open');
    hikeVideoBlock1.classList.toggle('hike__video--hidden');
    hikeVideoBlock2.classList.toggle('hike__photos--hidden');
  });

  var hikePriceBtn = document.querySelector('.hike__equipment-expand--price');
  var hikePriceBlock1 = document.querySelector('.hike__half-column--1');
  var hikePriceBlock2 = document.querySelector('.hike__half-column--2');

  hikePriceBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    hikePriceBtn.classList.toggle('hike__equipment-expand--open');
    hikePriceBlock1.classList.toggle('hike__half-column--hidden');
    hikePriceBlock2.classList.toggle('hike__half-column--hidden');
  });

  var hikePlanBtn = document.querySelector('.hike__equipment-expand--plan');
  var hikePlanBlock1 = document.querySelector('.hike__day--1');
  var hikePlanBlock2 = document.querySelector('.hike__day--2');

  hikePlanBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    hikePlanBtn.classList.toggle('hike__equipment-expand--open');
    hikePlanBlock1.classList.toggle('hike__day--hidden');
    hikePlanBlock2.classList.toggle('hike__day--hidden');
  });

  var hikeEquipmentBtn = document.querySelector('.hike__equipment-expand--equipment');
  var hikeEquipmentBlock1 = document.querySelector('.hike__equipment-wrapper');

  hikeEquipmentBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    hikeEquipmentBtn.classList.toggle('hike__equipment-expand--open');
    hikeEquipmentBlock1.classList.toggle('hike__equipment-wrapper--hidden');
  });

  var hikeReviewBtn = document.querySelector('.hike__equipment-expand--review');

  hikeReviewBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    hikeReviewBtn.classList.toggle('hike__equipment-expand--open');
  });
}

// show filter note
var showFilterNote = function() {
  var body = document.querySelector('body');
  var filterLink = document.querySelector('.filter__link');
  var filterNoteContainer = document.querySelector('.filter__popup-wrapper');
  var filterNote = document.querySelector('.filter__popup--main');
  var filterSubNote = document.querySelector('.filter__popup--right');
  
  filterLink.addEventListener('click', function(evt) {
    evt.preventDefault();
    filterNote.classList.toggle('filter__popup--main-open');
  });
  
  body.addEventListener('click', function(evt) {
    if(!evt.target.matches('.filter__link, .filter__popup-wrapper, .filter__popup-wrapper *')) {
      filterNote.classList.remove('filter__popup--main-open');
      filterSubNote.classList.remove('filter__popup--right-open');
    }
  });
  
  filterNote.addEventListener('mouseenter', function() {
    filterSubNote.classList.add('filter__popup--right-open');
  });
  
  filterNoteContainer.addEventListener('mouseleave', function() {
    filterSubNote.classList.remove('filter__popup--right-open');
  });
};

// show item dropdown
var showItemDropdown = function() {
  var itemDropLink = document.querySelectorAll('.item__drop-link');
  var itemDropdown = document.querySelectorAll('.item__dropdown');

  for (var i = 0; i < itemDropLink.length; i++) {
    itemDropLink[i].setAttribute('data-index', i);

    itemDropLink[i].addEventListener('click', function(evt) {
      evt.preventDefault();

      var indexitemLink = evt.currentTarget.getAttribute('data-index');

      this.classList.toggle('item__drop-link--expand');
      itemDropdown[indexitemLink].classList.toggle('item__dropdown--hidden');
    });
  }
};
