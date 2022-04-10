function noScroll() {
  window.scrollTo(0, 0);
}

window.addEventListener('scroll', noScroll);

const maintenance = document.querySelector('#maintenance');

maintenance.addEventListener('click', function (e) {
  if (e.target.classList.contains('close')) {
    maintenance.style.display = 'none';
    window.removeEventListener('scroll', noScroll);
  }
});
