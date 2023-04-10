new Swiper('.swiper', {
// навігація
  // булети, теперішнє положення, прогресбар
  
 pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: false
  },

  // включення/відключення перемикання слайду захватом картинки на пк
  simulateTouch: true,

  // чутливість свайпу
  touchRatio: 1,

  // кут зпрацьовування свайпу/перетягування
  touchAngle: 45,

  // курсор перетягування
  grabCursor: true,

  // перемикання при кліку на слайд
slideToClickedSlide: true,
  // навігація по хешу
  hashNavigation: {
  // відслідковувати стан
    watchState: true,
  },
  // управління клавіатурою
  keyboard: {
    // увімкнути/вимкнути
    enabled: true,
    // вкл/викл тільки коли слайдер в межах viewport
    pageUpDown: true,
  },

  // управління колесом мишки
  mousewheel: {
// чутливість колеса миші
    sensitivity: 1,
    // клас об'єкта на якому буде спрацьовувати прокрутка мишкою
    // (якщо на сторінці декілька слайдерів то вони будуть крутитись всі, тому варто залишити це за замовчуванням)
    // eventsTarget: ".swiper"
  },
  // кількість слайдів для показу (по замовчуванню стоїть 'auto')
  slidesPerView: 'auto', 
   // відключення функціоналу, якщо слайдів менше ніж потрібно
  watchOverflow: true,

  // відступ між слайдами 
  spaceBetween: 30,
  // безкінечний слайдер
  loop: true,
   // відключаємо скрол + мультирядковість,якщо slidesPerView: 'auto'
  // то потрібно прописувати к-сть дублюючих слайдів
  loopedSlides: 3,
  // вільний режим прокрутки
  freeMode: true,

  // автопрокрутка
  autoplay: {
// // пауза між прокруткою
    delay: 3000,
//     // закінчити на останньому слайді 
    stopOnLastSlide: true,
//     // відключити після ручного переключення
    disableOnInteraction: false
  },

  // швидікість автопрокруту 
  speed: 800,

  // БРЕКПОІНТ / АДАПТИВ / 
  // ширина екрану
  // (виставити значення slidesPerView: 'auto')
  breakpoints: {
    375: {
      slidesPreView: 1,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 18,
    },
     1024: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
})