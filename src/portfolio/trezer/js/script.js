"use strict";

(function () {
  var titles = document.querySelectorAll('.accordion__title');

  var showContent = function (item) {
    item.classList.toggle('accordion__title--active');
    item.nextElementSibling.classList.toggle('accordion__description--show');
  };

  [].forEach.call(titles, function (item) {
    item.addEventListener('click', function () {
      showContent(item);
    })
  });
})();

(function () {
  var inputs = document.querySelectorAll('.calculate__input');

  [].forEach.call(inputs, function (input) {
    var currentWidth = input.clientWidth;
    var step = 40;

    input.addEventListener('input', function (e) {
      var target = e.target;
      var width = target.value.length * step;

      target.setAttribute('style', 'width:' + width + 'px');

      if(width === 0) {
        target.setAttribute('style', 'width:' + currentWidth + 'px');
      }
    });
  });
})();

$("#cabinetSelect").select2({
    minimumResultsForSearch: Infinity
});
