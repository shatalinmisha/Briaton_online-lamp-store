import creatingShoppingCart from "./creatingShoppingCart.js";
import * as components from "./components.js";
import attachDeleteHandlers from "./attachDeleteHandlers.js";
import updateCartCounter from "./updateCartCounter.js";

export default function renderCartBasket(products = null) {
    // Блок корзина
    const divBasketEl = document.querySelector('.basket');
    // Получаем элемент списка товаров в корзине
    const bascetListEl = document.querySelector('.basket__list');
    // блок "корзина пока пуста"
    const emptyBlockEl = document.querySelector('.basket__empty-block');

    if (!products) {
        products = JSON.parse(localStorage.getItem('products')) || [];
    };

    // Очищаем текущий список товаров
    bascetListEl.innerHTML = '';
    let emptyBlockRemoved = false; // Флаг, чтобы удалить блок только один раз

    products.forEach((product, index) => {
        if (!emptyBlockRemoved && emptyBlockEl) {
            emptyBlockEl.remove();
            emptyBlockRemoved = true;
        } // удаляем блок "корзина пока пуста"
        creatingShoppingCart(bascetListEl, product, index);
    });

    if (products.length === 0) {
        // Если корзина пуста, добавляем блок "Корзина пока пуста"
        const emptyBlockEl = components.getDivBasketEl('basket__empty-block', 'Корзина пока пуста');
        divBasketEl.append(emptyBlockEl);
    }
    //Обработчик на кнопки удаления
    attachDeleteHandlers();
    //Обновляем счетчик в корзине
    updateCartCounter(products.length);
}