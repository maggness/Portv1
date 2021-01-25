var burgerButton = document.querySelector('#hamburgerMenu');
var hamburgerBoven = document.querySelector('#HamburgerBoven');
var hamburgerOnder = document.querySelector('#HamburgerOnder');


function burgerMenuPress() {
  hamburgerBoven.classList.add('TransformAnimatie');

  setTimeout(function () {
    hamburgerBoven.classList.add('BovenVliegen');
    hamburgerOnder.classList.add('OnderVliegen');
    burgerButton.classList.add('ButtonVliegenAnimatie');
  }, 1000);
}

burgerButton.addEventListener("click", burgerMenuPress);
