const el = document.querySelector('.my-element');

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  effect: 'fade',
  loop: true,
  mousewheel: {
    invert: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    768: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 30,
    }
  },
  slidesPerView: 2.5,
  spaceBetween: 15,
});

if (el) {
  const scrollbar = swiper.scrollbar;
  const isHorizontal = swiper.isHorizontal();

  scrollbar.el.classList.add(isHorizontal ? 'swiper-scrollbar-horizontal' : 'swiper-scrollbar-vertical');
  scrollbar.dragEl.classList.add(isHorizontal ? 'swiper-scrollbar-drag-horizontal' : 'swiper-scrollbar-drag-vertical');
} 