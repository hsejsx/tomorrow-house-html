'use strict';

const slider = tns({
  container: '.slider-list',
  items: 1,
  slideBy: 'page',
  autoplay: true,
  arrowKeys: true,
  mouseDrag: true,
  autoplayButtonOutput: false,
  autoplayHoverPause: true,
  controls: false,
  navContainer: '.thumbnail-list',
  preventScrollOnTouch: true,
});
