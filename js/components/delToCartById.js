import * as components from "./components.js";
import creatingShoppingCart from "./creatingShoppingCart.js";

export default function delToCartById(products = null) {
    const bascetListEl = document.querySelector('.basket__list');
    const divBasketEl = document.querySelector('.header__basket');


    if (!products) {
        products = JSON.parse(localStorage.getItem('products')) || [];
    }

    bascetListEl.innerHTML = "";
    products.forEach((product) => {
        creatingShoppingCart(bascetListEl, product);
    });

    if (products.length === 0) {
        // Если корзина пуста, добавляем блок "Корзина пока пуста"
        const emptyBlockEl = components.getDivBasketEl('basket__empty-block', 'Корзина пока пуста');
        divBasketEl.append(emptyBlockEl);
    }
}