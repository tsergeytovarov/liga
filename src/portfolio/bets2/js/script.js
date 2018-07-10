$(document).ready(function($) {
  $('.accordion').find('.accordion__toggle').click(function(){
    $(this).next().slideToggle('fast');
    $(this).find('.accordion__status--open').toggleClass('accordion__status--visible');
    $(this).find('.accordion__status--close').toggleClass('accordion__status--visible');
  });
});

var infoCardMenuToggle = document.querySelector(".accordion__menu-toggle");
var infoCardMenu = document.querySelector(".accordion__menu");

infoCardMenuToggle.addEventListener("click", function () {
  infoCardMenu.classList.toggle("accordion__menu--visible");
});
