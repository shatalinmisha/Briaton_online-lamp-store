import renderCartBasket from "./renderCartBasket.js";
import updateCartCounter from "./updateCartCounter.js";

export default function delToLocalStorage(porductIndex) {
  const products = JSON.parse(localStorage.getItem('products')) || [];
  products.splice(porductIndex, 1);
  localStorage.setItem('products', JSON.stringify(products));
  // Обновляем корзину и счетчик
  renderCartBasket();
  //Обновляем счетчик
  updateCartCounter(products.length);
}