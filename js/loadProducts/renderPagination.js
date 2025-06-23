import setPage from "../update/setPage.js";

export default function renderPagination(totalPages, currentPage) {
    const container = document.querySelector('.catalog__pagination');
    if (!container) return;

    container.innerHTML = '';

    if (totalPages <= 1) return; // не отображаем, если всего одна страница

    for (let i = 1; i <= totalPages; i++) {
        const liEl = document.createElement('li');
        liEl.className = 'catalog__pagination-item';

        const btnEl = document.createElement('button');
        btnEl.className = 'catalog__pagination-link';
        btnEl.textContent = i;

        if (i === currentPage) {
            btnEl.classList.add('catalog__pagination-link--active'); // Добавим класс для активной страницы
        }
 
        btnEl.addEventListener('click', () => {
            setPage(i); // изменяет текущую страницу
        });

        liEl.appendChild(btnEl);
        container.appendChild(liEl);
    }
}