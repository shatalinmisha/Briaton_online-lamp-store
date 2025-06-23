import * as components from "../../components/components.js";

export default function createTooltipContent(cardEl, product) {
    const spanTooltipTitleEl = components.getSpanEl('tooltip__text', 'Наличие товара по городам:');
    const ulTooltipEl = components.getListEl('tooltip__list');
    // Создаем список городов из данных
    for (let city in product.availability) {
        const liTooltipEl = components.getItemEl('tooltip__item');
        const spanTooltipCityEl = components.getSpanEl('tooltip__text', `${city.charAt(0).toUpperCase() + city.slice(1)}:`);
        const spanTooltipCountEl = components.getSpanEl('tooltip__count', product.availability[city]);

        spanTooltipCityEl.append(spanTooltipCountEl);
        liTooltipEl.append(spanTooltipCityEl);
        ulTooltipEl.append(liTooltipEl);
    }

    cardEl.append(spanTooltipTitleEl, ulTooltipEl);
}