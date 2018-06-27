const window = window;
const document = document;
let svg4everybody = svg4everybody();

window.script = (() => {

  svg4everybody();

  let firstScreenHeight = document.querySelector(`.intro`).offsetHeight;
  let pageContentHeight = document.querySelector(`.page-content`).offsetHeight;
  document.addEventListener(`scroll`, function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop < firstScreenHeight) {
      document.querySelector(`.header`).classList.remove(`dark`);
      document.querySelector(`.header`).classList.remove(`full`);
    } else if (scrollTop > firstScreenHeight) {
      document.querySelector(`.header`).classList.add(`full`);
    } else if (scrollTop > pageContentHeight) {
      document.querySelector(`.header`).classList.add(`dark`);
    }
  });

})(document);
