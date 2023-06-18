'use strict';

const reviewFooters = document.querySelectorAll('.review-footer');

reviewFooters.forEach(review => {
  const button = review.querySelector('button');
  button.addEventListener('click', handleButtonClick);
});

function handleButtonClick() {
  toggleButtonClass(this);

  const isLiked = this.classList.contains('btn-primary');
  const description = document.createElement('p');
  description.setAttribute('class', 'desc');
  description.innerHTML =
    '<strong><span>0</span>명</strong>에게 도움이 되었습니다.';

  const desc = this.nextElementSibling || description;
  if (desc === description) {
    this.parentElement.appendChild(description);
  }

  const count = desc.querySelector('span');
  updateLikeStatus(this, count, desc, isLiked);
}

function toggleButtonClass(button) {
  button.classList.toggle('btn-outlined');
  button.classList.toggle('btn-primary');
}

function updateLikeStatus(button, count, description, isLiked) {
  let newCount = Number(count.textContent);

  if (isLiked) {
    button.innerHTML = '<i class="ic-check"></i> 도움됨';
    newCount++;
  } else {
    button.innerHTML = '도움이 돼요';
    newCount--;
  }

  count.textContent = newCount.toLocaleString();

  if (newCount === 0) {
    button.parentElement.removeChild(description);
  }
}
