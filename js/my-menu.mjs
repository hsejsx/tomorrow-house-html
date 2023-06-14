'use strict';

const myMenu = document.querySelector('.gnb .my-menu');
const btnMyMenu = myMenu.querySelector('.my-menu-btn');

btnMyMenu.addEventListener('click', () => {
  myMenu.classList.toggle('is-active');

  if (myMenu.classList.contains('is-active')) {
    window.addEventListener('click', closeMyMenu);
  } else {
    window.removeEventListener('click', closeMyMenu);
  }
});

function closeMyMenu(e) {
  if (myMenu.contains(e.target)) {
    return;
  }
  myMenu.classList.remove('is-active');
  window.removeEventListener('click', closeMyMenu);
}
