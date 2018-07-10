var swiperBonuses = new Swiper('.bonuses-swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  direction: 'horizontal',
  init: true,
  loop: true,
  pagination: {
    el: '.bonuses-swiper-pagination',
    clickable: true
  }
});

var swiperBetRandom = new Swiper('.bet-random-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.bet-swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.bet-random__nav--next',
    prevEl: '.bet-random__nav--previous'
  }
});

var swiperForecasts = new Swiper('.forecasts-swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  loop: true,
  direction: 'horizontal',
  init: true,
  pagination: {
    el: '.forecasts-swiper-pagination',
    clickable: true
  }
});

var swiperLead = new Swiper('.lead-swiper-container', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.swiper-pagination--lead',
    clickable: true
  },
  navigation: {
    nextEl: '.lead-card__control--next',
    prevEl: '.lead-card__control--previous'
  }
});
