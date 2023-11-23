const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween:20,
   
breakpoints: {
   
    480: {
      slidesPerView: 2,
    },

    768: {
        slidesPerView: 3,
    },
},
  
  pagination: {
      el: '.pagination',
      bulletclass:'pagination__button'
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

}
);