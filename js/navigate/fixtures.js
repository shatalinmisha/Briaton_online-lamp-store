import * as componentsVariabals from "../globalVariable/componentsVariabals.js";
import renderProducts from "../loadProducts/renderProducts.js";
import applyFilters from "../loadProducts/applyFilters.js";
import renderProductsDay from "../loadProducts/renderProductsDay.js";
import renderCartBasket from "../loadProducts/renderCartBasket.js";
import renderTooltipContent from "../loadProducts/renderTooltipContent.js"

export async function fixtures() {
    // Загружаем данные с сервера
    const response = await fetch('./data/data.json');
    const products = await response.json();
    // сохраняем глобальнeю переменную
    componentsVariabals.setProducts(products);
    // Карточки товаров 
    renderProducts(products)
    // Применяем фильтрацию , сортировку и погинацию при загрузке
    applyFilters()
    // Карточки товаров "Товар дня"
    renderProductsDay(products)
    // Если есть товары в LocalStoreg отрисовать их при загрузке
    renderCartBasket();


    // Навешиваем фильтрацию на любые изменения чекбоксов/радио
    const filtersCheckboxEl = document.querySelectorAll('input[name="type"], input[name="status"]');
    filtersCheckboxEl.forEach(input => {
        input.addEventListener('change', applyFilters);
    });
    // сортировка
    const sortSelectEl = document.querySelector('.catalog__sort-select');
    sortSelectEl.addEventListener('change', applyFilters);

    // Подсказка
    const tooltipBtnEl = document.querySelectorAll('.tooltip__btn');
    tooltipBtnEl.forEach((button) => {
        button.addEventListener('mouseover', (event) => {
            const id = event.target.getAttribute('data-id'); // Получаем id товара
            const product = products.find(p => p.id === parseInt(id)); // Ищем товар по id
            if (product) {
                // Генерируем содержимое подсказки
                const tooltipContent = renderTooltipContent(product);
                // Создаём подсказку с помощью Tippy
                tippy(button, {
                    delay: 300,
                    theme: 'light',
                    animation: 'perspective',
                    content: tooltipContent,
                    allowHTML: true,
                });
            }
        });
    });
}