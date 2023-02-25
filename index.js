document.getElementById('sbtnbtn').addEventListener("click", function() {
  setTimeout(() => {
    location.reload();
  }, 630);
   
});//For the applying of the animation of skills
document.addEventListener("keypress", function(event) {
  if (event.target.closest('#contact')) {
    
   
    event.stopPropagation();
  } else {
    
    redirect(event.key);
  } 

  


});



function redirect(key) {

  switch (key) {
    case "h":
      window.location.hash = '#firstpage';
      break;

    case "a":
      window.location.hash = '#about';
      break;

    case "e":
      window.location.hash = '#education';
      break;

    case "s":
      setTimeout(() => {
        location.reload();
      }, 1000);
      window.location.hash = '#skills';
      break;

    case "p":
      window.location.hash = '#experience';
      break;

    case "c":
      window.location.hash = '#contact';
      break;



    default: window.location.hash = '#firstpage';;

  }
}








(function() {
  "use strict";

  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  } 
  
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });
})()

 
 
