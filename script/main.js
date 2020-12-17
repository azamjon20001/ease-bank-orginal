var burgerButton = document.querySelector('#burger-button');
var overlay = document.querySelector('#overlay'); 
var body = document.querySelector('body');
var mobileMenu = document.querySelector('#mobile_menu');

burgerButton.addEventListener('click', function(e){
  e.preventDefault();
  this.classList.toggle('clicked')
  overlay .classList.toggle('oppened')
  mobileMenu .classList.toggle('oppen')
  body.classList.toggle('no-scrol')
});
