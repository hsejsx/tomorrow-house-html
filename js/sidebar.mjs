'use strict';

const btnMenu = document.querySelector('.is-menu.btn-icon.sm-only');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');

function openSidebar() {
  overlay.classList.add('is-active');
  sidebar.classList.add('is-active');
}

btnMenu.addEventListener('click', openSidebar);

function closeSidebar() {
  overlay.classList.remove('is-active');
  sidebar.classList.remove('is-active');
}

overlay.addEventListener('click', closeSidebar);
