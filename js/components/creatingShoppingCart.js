import * as components from "./components.js";

export default function creatingShoppingCart(cardEl, product, index) {
    
    const liEl = components.getItemEl('basket__item');

    const divCardEl = components.getDivEl('basket__img');
    const imgEl = components.getImagesEl('#', product.image, '60', '60', 'Изображение товара');
    divCardEl.append(imgEl);

    const spanNameEl = components.getSpanEl('basket__name', product.name);
    const spanPriceEl = components.getSpanEl('basket__price', product.price.new);

    const buttonProductDelEl = components.getButtonDelCartEl('basket__item-close', product.id, 'button', index);
    const svgProductDelEl = components.getVectorGraphEl('basket__close-icon', '24', '24', 'true', 'images/sprite.svg#icon-close');
    buttonProductDelEl.append(svgProductDelEl);

    liEl.append(divCardEl, spanNameEl, spanPriceEl, buttonProductDelEl);
    // добавляем в список
    cardEl.append(liEl);
}

