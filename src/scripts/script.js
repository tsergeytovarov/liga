window.script = ((document) => {

  svg4everybody();

  let firstScreenHeight = document.querySelector(`.intro`).offsetHeight;
  let pageContentHeight = document.querySelector(`.page-content`).offsetHeight;

  document.addEventListener(`scroll`, function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    document.querySelector(`.header`).classList.remove(`dark`);
    document.querySelector(`.header`).classList.remove(`full`);

    if (scrollTop < pageContentHeight) {
      document.querySelector(`.main-nav`).classList.remove(`dark`);
    }
    if (scrollTop > firstScreenHeight) {
      document.querySelector(`.header`).classList.add(`full`);
      document.querySelector(`.main-nav`).classList.add(`dark`);
    }
    if (scrollTop > pageContentHeight) {
      document.querySelector(`.header`).classList.add(`dark`);
    }

    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    let last;

    for (let i = 0; i < sections.length; i++) {
      let section = sections[i];

      if (section.offset <= scrollPosition + window.innerHeight / 2) {
        last = section;
      }
    }

    if (last && oldLast !== last) {
      oldLast = last;
      document.querySelector(`.js-scroll-link.active`).classList.remove(`active`);
      last.el.classList.add(`active`);
    }
  });

  let oldLast;
  const sections = [];
  const section = document.querySelectorAll(`.js-section`);
  Array.prototype.forEach.call(section, function (e) {
    sections.push({offset: e.offsetTop, id: e.id, el: document.querySelector(`.js-scroll-link[href*=` + e.id + `]`)});
  });

  const reviewsSlider = new Swiper(`.js-reviews-slider`, {
    speed: 1000,
    navigation: {
      nextEl: `.reviews-slider-wrapper .swiper-button-next`,
      prevEl: `.reviews-slider-wrapper .swiper-button-prev`,
    },
    on: {
      slideChange() {
        let slideIndex = reviewsSlider.activeIndex;
        clientsSlider.slideTo(slideIndex, 1000);
      }
    }
  });

  const clientsSlider = new Swiper(`.js-clients-slider`);

  let clientsSlide = document.querySelectorAll(`.client-slide`);

  for (let i = 0; i < clientsSlide.length; i++) {
    clientsSlide[i].addEventListener(`click`, function () {
      reviewsSlider.slideTo(i, 1000);
      clientsSlider.slideToClickedSlide();
    });
  }

  function flexibleTextarea(textarea) {
    let textareaItem = document.getElementById(textarea) || textarea;
    if (textareaItem) {
      textareaItem.style.overflow = `hidden`;
      let e = textareaItem.rows = textareaItem.rows > 0 ? textareaItem.rows : 2;
      textarea = textareaItem.cols = textareaItem.cols > 0 ? textareaItem.cols : 20;
      let g = RegExp(`([^\r\n]{` + textarea + `})([^\r\n])`);
      let f = RegExp(`[^\n]{` + textarea + `}\n?$|[^\n]{0,` + textarea + `}\n`);
      textareaItem.onkeyup = textareaItem.onkeydown = function () {
        textareaItem.value = textareaItem.value.replace(g, `$1\r\n$2`);
        let c = 0; let d = textareaItem.value;
        for (; d.search(f) >= 0;) {
          c++;
          d = d.replace(f, ``);
        }
        c += 1;
        if (c < e) {
          c = e;
        }
        textareaItem.rows = c;
      };
    }
  }

  window.onload = function () {
    flexibleTextarea(`client-message`);
  };

  const button = document.querySelector(`.our-team__button`);

  button.addEventListener(`click`, function () {
    let listItem = document.querySelector(`.our-team__second-list`);

    if (listItem.classList.contains(`visible`) === false) {
      listItem.classList.add(`visible`);
    } else {
      listItem.classList.remove(`visible`);
    }
  });

})(document);
