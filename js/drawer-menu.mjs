'use strict';

const drawerMenuBtnList = [...document.querySelectorAll('.drawer-menu-btn')];

function toggleDrawerMenu() {
  const drawerMenu = this.parentNode;
  drawerMenu.classList.toggle('is-open');
  drawerMenuBtnList.map(
    drawerMenuBtn =>
      drawerMenuBtn !== this &&
      drawerMenuBtn.parentNode.classList.remove('is-open')
  );
}

drawerMenuBtnList.forEach(drawerMenuBtn => {
  drawerMenuBtn.addEventListener('click', toggleDrawerMenu);
});
