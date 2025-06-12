import addToLocalStorage from "./addToLocalStorage.js"

export default function attachAddHandlers() {
    const addCartButtonEl = document.querySelectorAll('.product-card__link');
    addCartButtonEl.forEach(button => {
        button.addEventListener('click', function (e) {
            const btn = e.target.closest('.product-card__link');
            if (!btn) return;
            const productId = parseInt(btn.dataset.id, 10);
            addToLocalStorage(productId);
        });
    });
}