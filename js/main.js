// import * as components from "./components/main-menu.js";
import loadProducts from "./components/loadProducts.js";
import applyFilters from "./components/applyFilters.js";
import renderCartBasket from "./components/renderCartBasket.js";
import updateCartCounter from "./components/updateCartCounter.js";
import { justValidateEl } from "./components/justValidate.js";
import addClient from "./components/addClient.js";


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

    const accordionBtnEl = document.querySelectorAll('.accordion__btn');
    accordionBtnEl.forEach((button) => {
        button.addEventListener('click', function () {
            const isActive = this.classList.contains('accordion__btn--active');

            // Сначала закрываем все элементы
            accordionBtnEl.forEach((btn) => {
                btn.classList.remove('accordion__btn--active');
                btn.nextElementSibling.style.maxHeight = null;
            });

            // Если текущий не был активным - открываем его
            if (!isActive) {
                this.classList.add('accordion__btn--active');
                const content = this.nextElementSibling;
                content.style.maxHeight = content.scrollHeight + 'px';
            }

        });
    });

    justValidateEl()
    const formEl = document.querySelector('#questionsForm');
    formEl.addEventListener('submit', function (event) {
        event.preventDefault();

        let name = document.querySelector('#name').value.trim();
        let email = document.querySelector('#email').value.trim();

        let hasError = false;

        const inputEl = document.querySelectorAll('input');

        inputEl.forEach(input => {
            if (input.value.trim() === "") {
                hasError = true;
            }
        });

        if (hasError) {
            return
        }

        const client = {
            name: name,
            email: email,
        }
        formEl.reset();
        addClient(client, email)
    });

});
