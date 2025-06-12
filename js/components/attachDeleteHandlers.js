import delToLocalStorage from "./delToLocalStorage.js";

export default function attachDeleteHandlers() {
    const delCartButtonEls = document.querySelectorAll('.basket__item-close');
    delCartButtonEls.forEach(button => {
        button.addEventListener('click', function (e) {
            const btn = e.target.closest('.basket__item-close');
            if (!btn) return;
            const porductIndex = this.getAttribute('data-index');
            delToLocalStorage(porductIndex);
        });
    });
}