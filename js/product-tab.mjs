'use strict';

const productTab = document.querySelector('.product-tab .product-tab-list');

const HEIGHT_SM = 50 + 40 + 40;
const HEIGHT_MD = 80 + 50 + 54 + 80;
let HEIGHT;

window.addEventListener('resize', () => {
  HEIGHT = window.innerWidth <= 768 ? HEIGHT_MD : HEIGHT_SM;
});

window.addEventListener('load', () => {
  HEIGHT = window.innerWidth <= 768 ? HEIGHT_MD : HEIGHT_SM;
});

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

let observer = new IntersectionObserver(callback);

sections.map(section => observer.observe(section));

function callback(entries) {
  entries.forEach(entry => {
    const target = entry.target.getAttribute('aria-labelledby');
    if (entry.isIntersecting) {
      const index = navItems.indexOf(
        navItems.find(item => item.getAttribute('aria-controls') === target)
      );
      navItems.map(item => item.classList.remove('is-active'));
      navItems[index].classList.add('is-active');
    }
  });
}
