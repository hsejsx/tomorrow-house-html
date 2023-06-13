'use strict';

const inputGroup = document.querySelector('.gnb .input-group');
const inputSearch = inputGroup.querySelector('.form-input');

inputSearch.addEventListener('focus', () => {
  inputGroup.classList.add('is-active');
});

inputSearch.addEventListener('blur', () => {
  inputGroup.classList.remove('is-active');
});
