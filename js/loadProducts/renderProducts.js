import createProductCard from "./createProducts/createProductCard.js";
import updateFilterCounts from "../update/updateFilterCounts.js";

export default async function renderProducts(products) {
    try {
        // Отрисовываем товары 
        const catalogListEl = document.querySelector('.catalog__list');
        catalogListEl.innerHTML = ''; 

        products.forEach(product => {
            createProductCard(catalogListEl, product);
        });
        updateFilterCounts(products);
    } catch (error) {
        console.error("Ошибка загрузки товаров:", error);
    }
}