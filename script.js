var burgerButton = document.querySelector('.header_button.burger_button');
burgerButton.addEventListener('click', function() {
  console.log(1)
  burgerButton.classList.toggle('opened');
})