'use strict';

const searchModal = document.querySelector('.search-modal');
const btnSearch = document.querySelector(
  '.btn-icon.lg-hidden[aria-label="검색"]'
);
const overlay = document.querySelector('.overlay');
const btnCancel = document.querySelector('.search-modal-header .btn-ghost');

btnSearch.addEventListener('click', () => {
  openSearchModal();
});

function openSearchModal() {
  overlay.classList.add('is-active');
  searchModal.classList.add('is-active');
}

btnCancel.addEventListener('click', () => {
  closeSearchModal();
});

function closeSearchModal() {
  searchModal.classList.remove('is-active');
  overlay.classList.remove('is-active');
}
