import createProductsCardDay from "./createProducts/createProductsCardDay.js";
import slider from "../vendorMethods/slider.js";

export default async function renderProductsDay(products) {
    try {
        const containerEl = document.querySelector('.day-products__list');
        containerEl.innerHTML = ''; // Очищаем перед повторным рендером
        // Фильтруем товары с goodsOfDay: true
        const dayProducts = products.filter(product => product.goodsOfDay);
        // Рендерим только актуальные товары дня
        dayProducts.forEach(product => {
            createProductsCardDay(containerEl, product);
        });
        slider();
    } catch (error) {
        console.error("Ошибка загрузки товаров:", error);
    }

}