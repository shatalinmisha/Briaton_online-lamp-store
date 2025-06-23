import { fixtures } from "./navigate/fixtures.js";
import { justValidateEl } from "./vendorMethods/justValidate.js";
import formHandler from "./formHandler/formHandler.js";

window.addEventListener('DOMContentLoaded', () => {
    fixtures()
    justValidateEl();
    // каталог
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

    // Ваш Город
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

    // Корзина
    const basketButtonEl = document.querySelector('.header__user-btn');
    basketButtonEl.addEventListener('click', function () {
        const basketMenuEl = document.querySelector('.basket');
        basketMenuEl.classList.toggle('basket--active');
    });

    // Ответы на частые вопросы от покупателей
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

    const formEl = document.querySelector('#questionsForm');
    formEl.addEventListener('submit', function (event) {
        event.preventDefault();
        formHandler(formEl);
    });

});
