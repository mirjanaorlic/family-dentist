
// Header change
var header = document.querySelector('.header');

window.onscroll = function() {
  changeHeader();
  scrollPosY = window.scrollY;
  console.log(scrollPosY); 
  changeColor();
}
function changeHeader() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
}

// Navbar scripts
var menu = document.getElementById('js-menu');
var navbar = document.getElementById('js-navbar');
var close = document.getElementById('js-close-btn');
var navLink = document.querySelectorAll('.nav-list__link');

// Show and hide navbar
menu.addEventListener('click', function() {
  navbar.style.display = 'block';
});

close.addEventListener('click', function() {
  navbar.style.display = 'none';
});

// Hide navbar on navbar item click
menu.addEventListener('click', function() {
  navbar.style.display = 'block';
  for(var j = 0; navLink.length; j++) {
    navLink[j].addEventListener('click', function() {
      navbar.style.display = 'none';
    });
  }  
}); 

// Change dot color
var dotLinks = document.getElementsByClassName("dot-link");

for (var i = 0; i < dotLinks.length; i++) {
  dotLinks[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active-colored");
  current[0].className = current[0].className.replace(" active-colored", "");
  this.className += " active-colored";
  });
}

// Change dot color on scroll
var services = document.getElementById('js-services');
var servicesSectionTop = services.getBoundingClientRect().top; 
var servicesDot = document.getElementById('services-dot');

var reviews = document.getElementById('js-reviews');
var reviewsSectionTop = reviews.getBoundingClientRect().top; 
var reviewsDot = document.getElementById('reviews-dot');

var pricing = document.getElementById('js-pricing');
var pricingSectionTop = pricing.getBoundingClientRect().top; 
var pricingDot = document.getElementById('pricing-dot');

var contact = document.getElementById('js-contact');
var contactSectionTop = contact.getBoundingClientRect().top; 
var contactDot = document.getElementById('contact-dot');
var showcaseDot = document.getElementById('showcase-dot');
var scrollPosY = window.scrollY;

function changeColor() {
  if(scrollPosY == 0) {
    removeDotColor();
    showcaseDot.classList.add('active-colored');
  } else if (scrollPosY >= servicesSectionTop && scrollPosY <= reviewsSectionTop){
    removeDotColor();
    servicesDot.classList.add('active-colored');
  } else if (scrollPosY >= reviewsSectionTop && scrollPosY <= pricingSectionTop){
    removeDotColor();
    reviewsDot.classList.add('active-white');
  } else if (scrollPosY >= pricingSectionTop && scrollPosY <= contactSectionTop){
    removeDotColor();
    pricingDot.classList.add('active-colored');
  } else if (scrollPosY >= contactSectionTop) {
    removeDotColor();
    contactDot.classList.add('active-colored');
  }
}
function removeDotColor() {
  for (var i = 0; i < dotLinks.length; i++) {
    dotLinks[i].classList.remove('active-colored');
  }
  for (var i = 0; i < dotLinks.length; i++) {
    dotLinks[i].classList.remove('active-white');
  }
}
