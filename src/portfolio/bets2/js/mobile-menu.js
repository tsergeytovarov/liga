"use strict";

(function () {
  var mainMenu = document.querySelector(".page-header__wrapper"),
      mainMenuOpen = document.querySelector(".page-header__button"),
      overlay = document.querySelector(".page-body");

    mainMenuOpen.addEventListener("click", function () {
      mainMenu.classList.toggle("js--menu-open");
      overlay.classList.toggle("js--overlay");
    });
})();
