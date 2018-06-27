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

})(document);
