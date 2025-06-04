import createProductCard from "./createProductCard.js";

export default async function fetchDataAndCreateCards(cardContainer) {
    const response = await fetch('./data/data.json');
    const data = await response.json();

    data.forEach(item => {
        // Создаем карточку для каждого товара
        createProductCard(cardContainer, item);
    })
}