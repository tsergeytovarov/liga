'use strict';

(function () {
  var sliderControls = document.querySelectorAll(".channels__control");
  var slider = document.querySelector(".channels");

  sliderControls[0].addEventListener("click", function (evt) {
    evt.preventDefault();
    slider.style.transition = "0.3s";
    slider.style.transform = "translateX(0%)";
    this.classList.toggle("channels__control--active");
    sliderControls[1].classList.remove("channels__control--active");
  });

  sliderControls[1].addEventListener("click", function (evt) {
    evt.preventDefault();
    slider.style.transition = "0.3s";
    slider.style.transform = "translateX(-50%)";
    this.classList.toggle("channels__control--active");
    sliderControls[0].classList.remove("channels__control--active");
  });
})();
