import createProductCard from "./createProductCard.js";
import attachAddHandlers from "./attachAddHandlers.js";

export default function renderProducts(products) {
  const containerEl = document.querySelector('.catalog__list');
  containerEl.innerHTML = ''; // Очищаем перед повторным рендером

  products.forEach(product => {
    createProductCard(containerEl, product); 
  });
  attachAddHandlers();
}
