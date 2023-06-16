'use strict';

const shipment = document.querySelector('.product-shipment');

shipment.addEventListener('click', () => {
  shipment.classList.add('is-open');
});
