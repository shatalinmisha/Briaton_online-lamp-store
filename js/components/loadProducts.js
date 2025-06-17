import { setProducts } from "./productStore.js";
import renderProducts from "./renderProducts.js";
import updateFilterCounts from "./updateFilterCounts.js";
import slider from "./slider.js";

export default async function loadProducts() {
  try {
    const response = await fetch('./data/data.json');
    const data = await response.json();

    setProducts(data); // сохраняем глобально
    renderProducts(data);// отрисовываем карточки товара
    updateFilterCounts();
    slider(data) // отрисовываем карточки в товарах дня со слайдером
  } catch (error) {
    console.error("Ошибка загрузки товаров:", error);
  }
}
