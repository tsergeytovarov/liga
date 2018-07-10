'use strict';

var foldFilterContainer = function() {
  var filter = document.querySelector('.filter');
  var filterTitle = filter.querySelectorAll('.filter__title');
  var filterContainer = filter.querySelectorAll('.filter__options');
  
  for (var i = 0; i < filterTitle.length; i++) {
    filterTitle[i].setAttribute('data-index', i);

    filterTitle[i].addEventListener('click', function(evt) {
      evt.preventDefault();

      var indexFilterTitle = evt.currentTarget.getAttribute('data-index');
      filterContainer[indexFilterTitle].classList.toggle('filter__options--hidden');
    });
  }
};

var controlActiveEventLinks = function () {
  var eventLinks = document.querySelectorAll('.events__link');

  var deleteEventLinksActiveClass = function () {
    var eventLinkActive = document.querySelector('.events__link--active');

    if (eventLinkActive !== null) {
      eventLinkActive.classList.remove('events__link--active');
    }
  };

  var toggleActiveEventLink = function () {
    for (var i = 0; i < eventLinks.length; i++) {
      eventLinks[i].addEventListener('click', function(evt) {
        evt.preventDefault();

        deleteEventLinksActiveClass();
        this.classList.add('events__link--active');
      })
    }
  };
  
  toggleActiveEventLink();
};
