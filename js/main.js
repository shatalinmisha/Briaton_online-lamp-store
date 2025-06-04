// import * as components from "./components/main-menu.js";
import fetchDataAndCreateCards from "./components/fetchDataAndCreateCards.js";

window.addEventListener('DOMContentLoaded', () => {

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

    const catalogContainer = document.querySelector('.catalog__list');
    fetchDataAndCreateCards(catalogContainer);

   

    
});
