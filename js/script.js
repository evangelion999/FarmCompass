//Запрет на скроллинг при открытии моб. меню
const burgerMenuBtn = document.querySelector('.header__burger-btn');

burgerMenuBtn.addEventListener('click', function() {
    document.body.classList.toggle('_overflowy-hidden');
});

//Слайдеры (swiper)
const productSlider1 = new Swiper('.product-slider__thumbs', {
    slidesPerView: 4,
    direction: 'vertical',
});
const productSlider2 = new Swiper('.product-slider__swiper', {
    slidesPerView: 1,

    navigation: {
        nextEl: '.product-slider__swiper .swiper-button-next',
        prevEl: '.product-slider__swiper .swiper-button-prev',
    },

    thumbs: {
        swiper: productSlider1,
    },
});
