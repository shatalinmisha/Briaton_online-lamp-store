import { getProductById } from "./productStore.js";
import renderCartBasket from "./renderCartBasket.js";
import updateCartCounter from "./updateCartCounter.js";

// сохраняем в локальной памяти
export default function addToLocalStorage(productId) {
  const product = getProductById(productId);// Получаем товар по ID
  if (!product) {
    console.error('Товар не найден');
    return;
  }
  const products = JSON.parse(localStorage.getItem('products')) || [];// Получаем текущий массив товаров из localStorage
  products.push(product);
  localStorage.setItem('products', JSON.stringify(products));// Сохраняем товар в localStorage под ключом, равным ID товара
  // Обновляем корзину и счетчик
  renderCartBasket();
  updateCartCounter(products.length);  // Обновляем счетчик
}