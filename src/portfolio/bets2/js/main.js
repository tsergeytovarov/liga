"use strict";

(function () {
  var mainMenu = document.querySelector(".page-header__wrapper"),
      overlay = document.querySelector(".page-body"),
      mainMenuOpen = document.querySelector(".page-header__button"),

      bookmakersList = document.querySelectorAll(".rating__row--hidden"),
      lastRow = document.querySelector(".rating__row--thirteenth"),
      bookmakersListOpen = document.querySelector(".button--rating");

  mainMenuOpen.addEventListener("click", function () {
    mainMenu.classList.toggle("js--menu-open");
    overlay.classList.toggle("js--overlay");
  });

  [].forEach.call(bookmakersList, function (element) {
      bookmakersListOpen.addEventListener('click', function (evt) {
        evt.preventDefault();
        element.classList.add("js--list-open");
        lastRow.classList.add("js--none");
      });
  });
})();
