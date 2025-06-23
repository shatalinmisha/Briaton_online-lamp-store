import renderCartBasket from "../loadProducts/renderCartBasket.js";
import updateCartCounter from "../update/updateCartCounter.js"

export default function attachDeleteHandlers() {
    const delCartButtonEls = document.querySelectorAll('.basket__item-close');
    delCartButtonEls.forEach(button => {
        button.addEventListener('click', function (e) {
            const btn = e.target.closest('.basket__item-close');
            if (!btn) return;
            const porductIndex = this.getAttribute('data-index');

            const products = JSON.parse(localStorage.getItem('products')) || [];
            products.splice(porductIndex, 1);
            localStorage.setItem('products', JSON.stringify(products));
             // Обновляем корзину и счетчик
            renderCartBasket();
            //Обновляем счетчик
            updateCartCounter(products.length);
        });
    });
}