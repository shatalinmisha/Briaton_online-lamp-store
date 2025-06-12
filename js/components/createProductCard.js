import * as components from "./components.js";

export default function createProductCard(cardEl, product) {

    const liEl = components.getItemEl('catalog__item');
    const divCardEl = components.getDivEl('product-card');

    const divImgEl = components.getDivEl('product-card__visual');
    const imgEl = components.getImagesEl('product-card__img', product.image, '436', '290', 'Изображение товара');

    const divMoreEl = components.getDivEl('product-card__more');
    const linkBasketEl = components.getLinkEl('#', ['product-card__link', 'btn', 'btn--icon'], product.id);
    const spanBasketEl = components.getSpanEl('btn__text', 'В корзину');
    const svgBasketEl = components.getVectorGraphEl('#','24', '24', 'true', 'images/sprite.svg#icon-basket');
    const linkMoreEl = components.getLinkEl('#', ['product-card__link', 'btn', 'btn--secondary'],  product.id);
    const spanMoreEl = components.getSpanEl('btn__text', 'Подробнее');

    const divInfoEl = components.getDivEl('product-card__info');
    const headingEl = components.getHeadingEl('product-card__title', product.name);

    const spanOldEl = components.getSpanEl('product-card__old', '');
    const spanOldNumberEl = components.getSpanEl('product-card__old-number', product.price.old.toLocaleString());
    const spanOldAddEl = components.getSpanEl('product-card__old-add', ' ₽');

    const spanPriceEl = components.getSpanEl('product-card__price', '');
    const spanPriceNumberEl = components.getSpanEl('product-card__price-number', product.price.new.toLocaleString());
    const spanPriceAddEl = components.getSpanEl('product-card__price-add', ' ₽');

    const divTooltipEl = components.getDivEl('product-card__tooltip', 'tooltip');
    const buttonTooltipEl = components.getButtonEl('tooltip__btn', 'submit', 'tooltipBtn', product.id, 'Показать подсказку');
    const svgTooltipEl = components.getVectorGraphEl('#','5', '10', 'true', 'images/sprite.svg#icon-i');

    const divTooltipContentEl = components.getDivEl('tooltip__content');
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

    // Собираем карточку
    divTooltipContentEl.append(spanTooltipTitleEl, ulTooltipEl)
    // ссылки корзина и подробнее
    linkBasketEl.append(spanBasketEl, svgBasketEl);
    linkMoreEl.append(spanMoreEl);
    divMoreEl.append(linkBasketEl, linkMoreEl);
    divImgEl.append(imgEl, divMoreEl);
    // старая и новая цена
    spanOldEl.append(spanOldNumberEl, spanOldAddEl);
    spanPriceEl.append(spanPriceNumberEl, spanPriceAddEl);
    // кнопка с иконкой подсказки
    buttonTooltipEl.append(svgTooltipEl);
    divTooltipEl.append(buttonTooltipEl, divTooltipContentEl);
    // собираем блок с названием и ценой
    divInfoEl.append(headingEl, spanOldEl, spanPriceEl, divTooltipEl)
    // объединяем блоки
    divCardEl.append(divImgEl, divInfoEl);
    liEl.append(divCardEl);
    // добавляем в список
    cardEl.append(liEl);
}