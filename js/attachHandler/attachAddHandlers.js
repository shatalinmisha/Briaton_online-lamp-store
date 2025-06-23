import * as componentsVariabals from "../globalVariable/componentsVariabals.js";
import renderCartBasket from "../loadProducts/renderCartBasket.js";
import updateCartCounter from "../update/updateCartCounter.js";

export default function attachAddHandlers() {
  const addCartButtonEl = document.querySelectorAll('.product-card__link');
  addCartButtonEl.forEach(button => {
    button.addEventListener('click', function (e) {
      const btn = e.target.closest('.product-card__link');
      if (!btn) return;
      const productId = parseInt(btn.dataset.id, 10);
      const product = componentsVariabals.getProductById(productId);// Получаем товар по ID
      if (!product) {
        console.error('Товар не найден');
        return;
      }
      const products = JSON.parse(localStorage.getItem('products')) || [];// Получаем текущий массив товаров из localStorage
      products.push(product);
      localStorage.setItem('products', JSON.stringify(products));// Сохраняем товар в localStorage под ключом, равным ID товара
      // Обновляем корзину и счетчик
      renderCartBasket();
      // Обновляем счетчик
      updateCartCounter(products.length);
    });
  });
}