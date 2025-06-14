// import * as components from "./components/main-menu.js";
import loadProducts from "./components/loadProducts.js";
import applyFilters from "./components/applyFilters.js";
import renderCartBasket from "./components/renderCartBasket.js";
import updateCartCounter from "./components/updateCartCounter.js";

window.addEventListener('DOMContentLoaded', async () => {
    await loadProducts();// загрузка и сохранение всех товаров
    applyFilters();// сразу применяем фильтрацию и сортировку
    renderCartBasket();// Отображаем товары из localStorage при загрузке страницы
    updateCartCounter(JSON.parse(localStorage.getItem('products')).length);// Обновляем счетчик при загрузке
    // Навешиваем фильтрацию на любые изменения чекбоксов/радио
    document.querySelectorAll('input[name="type"], input[name="status"]').forEach(input => {
        input.addEventListener('change', applyFilters);
    });
    // сортировка
    document.querySelector('.catalog__sort-select').addEventListener('change', applyFilters);

    const catalogButtonEl = document.querySelector('#catalogButton');
    catalogButtonEl.addEventListener('click', function () {
        const mainMenuEl = document.querySelector('#mainMenu');
        mainMenuEl.classList.add('main-menu--active');
    });

    const mainMenuCloseEl = document.querySelector('#mainMenuClose');
    mainMenuCloseEl.addEventListener('click', function () {
        const mainMenuEl = document.querySelector('#mainMenu');
        mainMenuEl.classList.remove('main-menu--active');
    });

    const locationCityButtonEl = document.querySelector('#locationCityButton');
    locationCityButtonEl.addEventListener('click', function () {
        locationCityButtonEl.classList.toggle('location__city--active');
    });

    const locationSublistEl = document.querySelector('#locationSublist');
    const locationCityNameEl = document.querySelector('#locationCityName');

    locationSublistEl.addEventListener('click', (event) => {
        if (event.target.classList.contains('location__sublink')) {
            const cityText = event.target.textContent;
            locationCityNameEl.textContent = cityText;
            locationCityButtonEl.classList.toggle('location__city--active');
        }
    });

    const basketButtonEl = document.querySelector('.header__user-btn');
    basketButtonEl.addEventListener('click', function () {
        const basketMenuEl = document.querySelector('.basket');
        basketMenuEl.classList.toggle('basket--active');
    });

});
