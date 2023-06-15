'use strict';

const productSpec = document.querySelector('.product-spec.product-section');
const btnOpen = productSpec.querySelector('.btn-wrapper');

btnOpen.addEventListener('click', () => {
  productSpec.classList.add('is-open');
});
