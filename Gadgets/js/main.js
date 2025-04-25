(function() {
    
  //  ======= BURGER =======
  
      document.addEventListener('click', burgerInit)
  
      function burgerInit(e) {
          
          const burgerIcon = e.target.closest('.burger-icon')
          const burgerNavLink = e.target.closest('.nav__link')
  
          if (!burgerIcon && !burgerNavLink) return
          if (document.documentElement.clientWidth > 900) return
  
          if (!document.body.classList.contains('body--opened-menu')) {
              document.body.classList.add('body--opened-menu')
          } else {
              document.body.classList.remove('body--opened-menu')
          }
      }

        //  ======= SWIPER =======

        const swiper = new Swiper('.hero__slider', {
        
        spaceBetween: 0,
        slidesPerView: 1,
        centeredSlides: true,
        

        navigation: {
          nextEl: '.hero__next',
          prevEl: '.hero__prev',
        },

      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },

    });

//  ======= PRODUCT =======

const container = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.slide');

let offset = 0;
let slideID = 0;

setInterval (() => {
  offset = slides[0].offsetWidth;

  container.style.transition = "left ease-in-out 500ms";
  container.style.left = -offset + 'px';

  setTimeout (() => {
    container.style.transition = "none";
    slides[slideID].style.order = slides.length - 1;
    container.style.left = 0;
    slideID++;

    if(slideID === slides.length) {
      slideID = 0;
      slides.forEach(slide => {
        slide.style.order = "initial";
      });
    }
  }, 500);
}, 3000);

//  ======= KEYBOARD =======

const searchInput = document.getElementById('searchInput');
const suggestionButtons = document.querySelectorAll('.keyboard__search-item');


suggestionButtons.forEach(button => {
  button.addEventListener('click', () => {
    searchInput.value = button.textContent;
  });
});



})()