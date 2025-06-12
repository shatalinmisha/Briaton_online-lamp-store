// import { getProductById } from "./productStore.js";
import creatingShoppingCart from "./creatingShoppingCart.js";

export default function addToCartById(products = null) {
    const bascetListEl = document.querySelector('.basket__list');
    const emptyBlockEl = document.querySelector('.basket__empty-block');

    if (!products) {
        products = JSON.parse(localStorage.getItem('products')) || [];
    };

    bascetListEl.innerHTML = "";
    let emptyBlockRemoved = false; // Флаг, чтобы удалить блок только один раз

    products.forEach((product) => {
        if (!emptyBlockRemoved && emptyBlockEl) {
            emptyBlockEl.remove();
            emptyBlockRemoved = true;
        }  // удаляем блок "корзина пока пуста"
        creatingShoppingCart(bascetListEl, product);
    });
}