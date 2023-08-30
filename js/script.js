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