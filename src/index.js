import "font-awesome/fonts/fontawesome-webfont.eot"
import "font-awesome/fonts/fontawesome-webfont.woff"
import "font-awesome/fonts/fontawesome-webfont.woff2"
import "font-awesome/fonts/fontawesome-webfont.ttf"
import "font-awesome/fonts/fontawesome-webfont.svg"

import "bootstrap/dist/js/bootstrap.bundle"
import "slick-carousel/slick/slick.min.js"

import "./styles/style.scss"

import "./components/swiper"

import "./components/slik-slider"
import "./components/form"
import "./components/calc"

import timer from './components/timer'

timer()

var button = document.querySelector('.menu__btn');
  button.addEventListener('click', function (){
  	button.classList.toggle('open');
});

$('menu__btn').click(function(){
  $(this).toggleClass('clicked');
});

$( ".menu__btn" ).click(function() {
  $( ".navbar" ).slideToggle( 900, function() {
    // Animation complete.
  });
});