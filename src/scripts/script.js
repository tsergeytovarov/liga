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

  const map = Array.prototype.map;
  const debounce = function (deltaTime, fn) {
    let nextCall;
    return function () {
      clearTimeout(nextCall);
      nextCall = setTimeout(fn, deltaTime);
    };
  };

  const menuItemStyleName = function (sectionName) {
    return `link-color-` + sectionName;
  };

  if (document.querySelector(`.header`)) {
    let sections = [];

    const updateSections = function () {

      const section = document.querySelectorAll(`.js-section`);
      sections = map.call(section, function (e) {
        return {
          offset: e.offsetTop,
          dataName: e.getAttribute(`data-name`),
          el: document.querySelector(`.js-scroll-link[data-target=` + e.getAttribute(`data-name`) + `]`),
          height: e.offsetHeight
        };
      });
    };

    let windowHeight;
    let colorizableItems = [];
    let inBetweenUpdateConfig = [];

    let onResize = debounce(30, function () {

      windowHeight = window.innerHeight;

      colorizableItems = [].slice.call(document.querySelectorAll(`.main-nav .main-nav__item a`)).concat(document.querySelector(`.main-nav__telephone`)).concat(document.querySelector(`.header`)).concat(document.querySelector(`.js-nav-toggler`)).map(function (el, i) {
        const rect = el.getClientRects()[0];

        const cfg = {
          el,
          offset: windowHeight - rect.bottom + rect.height / 2,
          currentStyle: `none`,
          setStyle: `none`,
          isActive: false,
          lastActive: false
        };
        if(inBetweenUpdateConfig.length > i){
          let oldConfig = inBetweenUpdateConfig[i];
          cfg.currentStyle = oldConfig.currentStyle;
          cfg.setStyle = oldConfig.setStyle;
          cfg.isActive = oldConfig.isActive;
          cfg.lastActive = oldConfig.lastActive;
        }
        inBetweenUpdateConfig[i] = cfg;
        return cfg;
      });
      updateSections();
      highlightMenu();
    });

    let lastHeight = document.body.clientHeight;
    let madnessCounter = 0;
    let madnessInterval = setInterval(function () {
      let newHeight = document.body.clientHeight;

      if (lastHeight !== newHeight) {
        lastHeight = newHeight;
        onResize();
      }
      madnessCounter++;
      if (madnessCounter > 50 * 20) { // ~20 seconds
        clearInterval(madnessInterval);
      }
    }, 20);

    onResize();

    window.addEventListener(`resize`, onResize);

    let highlightMenu = function () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      let j;
      let _j;
      let item;

      for (j = 0, _j = colorizableItems.length; j < _j; j++) {
        item = colorizableItems[j];
        if (item) {
          item.isActive = false;
        }
      }

      for (let i = 0; i < sections.length; i++) {

        let sectionOffsetTop = scrollTop + windowHeight - (sections[i].offset);
        let sectionOffsetBottom = sectionOffsetTop - sections[i].height;

        if (sections[i].offset + sections[i].height < scrollTop) {
          // skip it
        } else if (sections[i].offset > scrollTop + windowHeight) {
          // out of viewing range
          break;
        } else {

          for (j = 0, _j = colorizableItems.length; j < _j; j++) {
            item = colorizableItems[j];
            if (item.offset < sectionOffsetTop && item.offset >= sectionOffsetBottom) {
              item.setStyle = sections[i].dataName;
              // console.log(j,item.setStyle);
              if (i === j && item) {
                item.isActive = true;
              }
            }
          }
        }
      }

      for (j = 0, _j = colorizableItems.length; j < _j; j++) {
        item = colorizableItems[j];
        if (item) {
          if (item.setStyle !== item.currentStyle) {
            item.el.classList.remove(menuItemStyleName(item.currentStyle));
            item.currentStyle = item.setStyle;
            item.el.classList.add(menuItemStyleName(item.currentStyle));
          }
        }

        if (item.isActive !== item.lastActive) {

          if (item.isActive) {
            item.el.classList.add(`active`);
          } else {
            item.el.classList.remove(`active`);
          }

          item.lastActive = item.isActive;
        }
      }
    };

    document.addEventListener(`scroll`, function () {
      highlightMenu();
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 1) {
        document.querySelector(`.header`).classList.add(`fixed`);
        document.querySelector(`.nav-toggler`).classList.add(`fixed`);
        document.querySelector(`.main-nav`).classList.add(`fixed`);
      } else {
        document.querySelector(`.header`).classList.remove(`fixed`);
        document.querySelector(`.nav-toggler`).classList.remove(`fixed`);
        document.querySelector(`.main-nav`).classList.remove(`fixed`);
      }
    });
    highlightMenu();
  }

  if (document.querySelector(`.js-reviews-slider`)) {
    const reviewsSlider = new Swiper(`.js-reviews-slider`, {
      speed: 500,
      navigation: {
        nextEl: `.reviews-slider-wrapper .swiper-button-next`,
        prevEl: `.reviews-slider-wrapper .swiper-button-prev`,
      },
      on: {
        slideChange() {
          let slideIndex = reviewsSlider.activeIndex;
          clientsSlider.slideTo(slideIndex, 500);
        }
      }
    });

    const clientsSlider = new Swiper(`.js-clients-slider`, {
      speed: 500,
      on: {
        slideChange() {
          let n = clientsSlider.activeIndex;
          reviewsSlider.slideTo(n, 500);
        }
      }
    });

    let clientsSlide = document.querySelectorAll(`.client-slide`);

    for (let i = 0; i < clientsSlide.length; i++) {
      clientsSlide[i].addEventListener(`click`, function () {
        reviewsSlider.slideTo(i, 500);
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
      navToggler.classList.toggle(`active`);
      document.querySelector(`body`).classList.toggle(`overflow`);
      scrollLock.toggle(document.querySelector(`body`));
    });

    let scrollLink = document.querySelectorAll(`.js-scroll-link`);
    for (let i = 0; i < scrollLink.length; i++) {
      scrollLink[i].addEventListener(`click`, function () {
        header.classList.remove(`menu-opened`);
        nav.classList.remove(`opened`);
        navToggler.classList.remove(`active`);
        document.querySelector(`body`).classList.remove(`overflow`);
        scrollLock.show(document.querySelector(`body`));
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
