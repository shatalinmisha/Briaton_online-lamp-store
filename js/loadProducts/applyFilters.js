import getSelectedTypes from "../update/getSelectedTypes.js";
import * as componentsVariabals from "../globalVariable/componentsVariabals.js";
import isInStock from "../update/isInStock.js";
import renderPagination from "./renderPagination.js";
import renderProducts from "./renderProducts.js"
import attachAddHandlers from "../attachHandler/attachAddHandlers.js";

export default function applyFilters() {
  const sortValue = document.querySelector('.catalog__sort-select')?.value || 'rating-max';
  const stockOnly = document.querySelector('#instock')?.checked;
  const selectedTypes = getSelectedTypes();
  const allProducts = componentsVariabals.getProducts();

  // Фильтрация
  let filtered = allProducts.filter(product => {
    const matchesType = selectedTypes.length === 0 || selectedTypes.some(type => product.type.includes(type)); // Фильтрация по типу
    const matchesStock = !stockOnly || isInStock(product); // Фильтрация по наличию
    return matchesType && matchesStock;
  });

  // Сортировка
  if (sortValue === 'price-min') {
    filtered.sort((a, b) => a.price.new - b.price.new);
  } else if (sortValue === 'price-max') {
    filtered.sort((a, b) => b.price.new - a.price.new);
  } else { // rating-max
    filtered.sort((a, b) => b.rating - a.rating);
  }

  // Пагинация
  const PRODUCTS_PER_PAGE = 6;
  const currentPage = componentsVariabals.getCurrentPage(); // Получаем актуальный номер страницы
  const totalPages = Math.ceil(filtered.length / PRODUCTS_PER_PAGE);

  const paginatedProducts = filtered.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  // Рендерим пагинацию
  renderPagination(totalPages, currentPage);
  renderProducts(paginatedProducts);
  attachAddHandlers();
}