'use strict';

const productTab = document.querySelector('.product-tab .product-tab-list');

const HEIGHT_SM = 50 + 40 + 40;
const HEIGHT_MD = 80 + 50 + 54;
let HEIGHT = getHeight();

function getHeight() {
  return window.innerWidth >= 768 ? HEIGHT_MD : HEIGHT_SM;
}

productTab.addEventListener('click', e => {
  const target = e.target.parentNode.getAttribute('id');
  const element = document.querySelector(`.${target}`);
  const scrollPosition = element.offsetTop - HEIGHT;
  window.scrollTo({
    top: scrollPosition,
    behavior: 'smooth',
  });
});

const sectionClassList = [
  '.product-spec',
  '.product-review',
  '.product-inquiry',
  '.product-shipment',
  '.product-recommendation',
];
const sections = sectionClassList.map(section =>
  document.querySelector(section)
);
const navItems = [
  ...document.querySelectorAll('.product-tab-list li[aria-controls]'),
];

const isIntersectingList = sections.map(() => false);

const options = {
  rootMargin: `-${HEIGHT + 1}px 0px 0px 0px`,
  threshold: [0, 0.8, 1],
};

let observer = new IntersectionObserver(callback, options);

sections.map(section => observer.observe(section));

function callback(entries) {
  let selectLastItem = false;
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const index = sectionClassList.indexOf(`.${entry.target.classList[0]}`);
      isIntersectingList[index] = true;
      if (
        index === sectionClassList.length - 1 &&
        entry.intersectionRatio >= 0.7
      ) {
        selectLastItem = true;
      }
    } else {
      const index = sectionClassList.indexOf(`.${entry.target.classList[0]}`);
      isIntersectingList[index] = false;
      if (index === sectionClassList.length - 1) {
        selectLastItem = false;
      }
    }
    navItems.map(item => item.classList.remove('is-active'));
    const index = selectLastItem
      ? sectionClassList.length - 1
      : isIntersectingList.indexOf(true);
    navItems[index].classList.add('is-active');
  });
}
