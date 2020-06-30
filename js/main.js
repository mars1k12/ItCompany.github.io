var mySwiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    750: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 640px
    1100: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
})