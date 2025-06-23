export default function slider() {
   // Настройки слайдера 
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: false,

        slidesPerView: 4, //Количество отображаемых слайдов
        spaceBetween: 20, //Расстояне между слайдами

        navigation: {
            nextEl: '.day-products__navigation-btn--next',
            prevEl: '.day-products__navigation-btn--prev',
        },
    });
}