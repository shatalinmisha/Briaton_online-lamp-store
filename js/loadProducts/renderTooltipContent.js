import createTooltipContent from "./createProducts/createTooltipContent.js";
// Функция для создания HTML содержимого подсказки
export default function renderTooltipContent(product) {
    const catalogListEl = document.querySelector('.tooltip__list');
    catalogListEl.innerHTML = '';

    createTooltipContent(catalogListEl, product)
    
    return catalogListEl;
}