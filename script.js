var burgerButton = document.querySelector('.header_button.burger_button'),
  burgerMenu = document.querySelector('.burger_menu'),
  selectedPage = 0;
burgerButton.addEventListener('click', function() {
  console.log(1)
  burgerButton.classList.toggle('opened');
  burgerMenu.classList.toggle('closed');
})
window.addEventListener('wheel', function() {
  if (event.deltaY > 0) {
    selectedPage += 1;
    var x = 100 * selectedPage;
  }
  if (event.deltaY < 0 && selectedPage > 0) {
    selectedPage -= 1;
    var x = 100 * selectedPage;
  }
  document.querySelector('.pages').style.transform = 'translateX(-' + x + 'vw)';
  if (selectedPage >= 1) {
    document.querySelector('.logo').classList.add('green');
  }
  if (selectedPage === 1) {
    this.console.log(selectedPage);
    document.querySelector('.leaves').classList.add('view');
  }
  if (selectedPage !== 1) {
    document.querySelector('.leaves').classList.remove('view');
  }
  if (selectedPage < 1) {
    this.console.log(selectedPage);
    document.querySelector('.logo').classList.remove('green');
  }
})