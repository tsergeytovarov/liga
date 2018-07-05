window.script = ((document) => {

  svg4everybody();

  let elNames = document.querySelectorAll(`.js-scroll-link[data-target]`);

  function getTop(elem) {
    let box = elem.getBoundingClientRect();
    let boxTop = box.top + pageYOffset;

    return boxTop;
  }

  for (let i = 0; i < elNames.length; i++) {
    elNames[i].addEventListener(`click`, function (e) {
      e.preventDefault();
      if (elNames[i].classList.contains(`main-nav__link`)) {
        for (let n = 0; n < elNames.length; n++) {
          elNames[n].classList.remove(`active`);
        }
      }
      elNames[i].classList.add(`active`);
      let targetName = elNames[i].getAttribute(`data-target`);
      let targets = document.querySelectorAll(`.js-section[data-name]`);
      let targetCoord;

      for (let t = 0; t < targets.length; t++) {
        if (targets[t].getAttribute(`data-name`) === targetName) {
          targetCoord = getTop(targets[t]);
        }
      }

      let scrollData = function () {
        window.scrollTo({
          top: targetCoord,
          behavior: `smooth`
        });
      };

      setTimeout(scrollData, 10);
    });
  }

  document.addEventListener(`scroll`, function () {

  });

  // let firstScreenHeight = document.querySelector(`.intro`).offsetHeight;
  // let pageContentHeight = document.querySelector(`.page-content`).offsetHeight;

  // document.addEventListener(`scroll`, function () {
  //   let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //   document.querySelector(`.header`).classList.remove(`dark`);
  //   document.querySelector(`.header`).classList.remove(`full`);

  //   if (scrollTop < pageContentHeight) {
  //     document.querySelector(`.main-nav`).classList.remove(`dark`);
  //   }
  //   if (scrollTop > firstScreenHeight) {
  //     document.querySelector(`.header`).classList.add(`full`);
  //     document.querySelector(`.main-nav`).classList.add(`dark`);
  //   }
  //   if (scrollTop > pageContentHeight) {
  //     document.querySelector(`.header`).classList.add(`dark`);
  //   }

  //   let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

  //   let last;

  //   for (let i = 0; i < sections.length; i++) {
  //     let section = sections[i];

  //     if (section.offset <= scrollPosition + window.innerHeight / 2) {
  //       last = section;
  //     }
  //   }

  //   if (last && oldLast !== last) {
  //     oldLast = last;
  //     document.querySelector(`.js-scroll-link.active`).classList.remove(`active`);
  //     last.el.classList.add(`active`);
  //   }
  // });

  // let oldLast;
  // const sections = [];
  // const section = document.querySelectorAll(`.js-section`);
  // Array.prototype.forEach.call(section, function (e) {
  //   sections.push({offset: e.offsetTop, id: e.id, el: document.querySelector(`.js-scroll-link[href*=` + e.id + `]`)});
  // });

  if (document.querySelector(`.js-reviews-slider`)) {
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

    const clientsSlider = new Swiper(`.js-clients-slider`, {
      on: {
        reachEnd() {
          // clientsSlider.slideTo(1);
        }
      }
    });

    let clientsSlide = document.querySelectorAll(`.client-slide`);

    for (let i = 0; i < clientsSlide.length; i++) {
      clientsSlide[i].addEventListener(`click`, function () {
        reviewsSlider.slideTo(i, 1000);
        clientsSlider.slideToClickedSlide();
      });
    }
  }

  if (document.querySelector(`textarea`)) {
    window.onload = function () {
      autosize(document.querySelector(`textarea`));
    };

    if (document.querySelector(`.our-team__button`)) {
      const button = document.querySelector(`.our-team__button`);

      button.addEventListener(`click`, function () {
        let listItem = document.querySelector(`.our-team__second-list`);

        if (listItem.classList.contains(`visible`) === false) {
          listItem.classList.add(`visible`);
        } else {
          listItem.classList.remove(`visible`);
        }
      });
    }
  }

  if (document.querySelector(`.js-project-image`)) {
    const projectImages = document.querySelectorAll(`.js-project-image`);
    if (document.documentElement.clientWidth > 767) {
      for (let i = 0; i < projectImages.length; i++) {
        projectImages[i].addEventListener(`click`, function () {
          const siblings = projectImages[i].parentNode.childNodes;
          for (let m = 0; m < siblings.length; m++) {
            if (siblings[m].nodeType === 1) {
              siblings[m].classList.remove(`higher`);
            }
          }
          projectImages[i].classList.add(`higher`);
        });
      }
    }
  }

  if (document.querySelector(`.js-tab-control`)) {
    let tabControls = document.querySelectorAll(`.js-tab-control`);
    let tabs = document.querySelectorAll(`.js-tab`);
    for (let i = 0; i < tabControls.length; i++) {
      tabControls[i].addEventListener(`click`, function () {
        for (let tc = 0; tc < tabControls.length; tc++) {
          tabControls[tc].classList.remove(`active`);
          tabs[tc].classList.remove(`active`);
        }
        tabControls[i].classList.add(`active`);
        tabs[i].classList.add(`active`);
      });

    }
  }

  if (document.querySelector(`.js-nav-toggler`)) {
    const navToggler = document.querySelector(`.js-nav-toggler`);
    const nav = document.querySelector(`.js-nav`);
    const header = document.querySelector(`.header`);

    navToggler.addEventListener(`click`, function () {
      header.classList.toggle(`menu-opened`);
      nav.classList.toggle(`opened`);
      document.querySelector(`body`).classList.toggle(`overflow`);
    });

    let scrollLink = document.querySelectorAll(`.js-scroll-link`);
    for (let i = 0; i < scrollLink.length; i++) {
      scrollLink[i].addEventListener(`click`, function () {
        header.classList.remove(`menu-opened`);
        nav.classList.remove(`opened`);
        document.querySelector(`body`).classList.remove(`overflow`);
      });
    }
  }

  if (document.querySelector(`.js-show-projects`)) {
    let showProjects = document.querySelector(`.js-show-projects`);
    let projectsList = document.querySelector(`.js-projects`);

    showProjects.addEventListener(`click`, function () {
      showProjects.classList.add(`hide`);
      projectsList.classList.add(`full`);
    });
  }

  if (document.querySelector(`.js-video`)) {
    let videoBtn = document.querySelectorAll(`.js-play-btn`);

    for (let i = 0; i < videoBtn.length; i++) {
      videoBtn[i].addEventListener(`click`, function () {
        if (videoBtn[i].parentNode.classList.contains(`playing`)) {
          videoBtn[i].parentNode.classList.remove(`playing`);
          videoBtn[i].parentNode.querySelector(`video`).pause();
        } else {
          videoBtn[i].parentNode.classList.add(`playing`);
          videoBtn[i].parentNode.querySelector(`video`).play();
        }
      });
    }
  }

})(document);
