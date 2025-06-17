import createProductsCardDay from "./createProductsCardDay.js";

export default async function slider(products) {
    const containerEl = document.querySelector('.day-products__list');
    containerEl.innerHTML = ''; // Очищаем перед повторным рендером

    // Фильтруем товары с goodsOfDay: true
    const dayProducts = products.filter(product => product.goodsOfDay);
    // Рендерим только актуальные товары дня
    dayProducts.forEach(product => {
        createProductsCardDay(containerEl, product);
    });
    
    const swiper = new Swiper('.swiper', {
        // Настройки слайдера 
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