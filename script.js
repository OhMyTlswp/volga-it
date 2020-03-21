var burgerButton = document.querySelector('.header_button.burger_button'),
  burgerMenu = document.querySelector('.burger_menu');
burgerButton.addEventListener('click', function() {
  console.log(1)
  burgerButton.classList.toggle('opened');
  burgerMenu.classList.toggle('closed');
})