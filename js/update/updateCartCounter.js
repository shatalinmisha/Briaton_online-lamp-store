export default function updateCartCounter(count) {
    const counterEl = document.querySelector('.header__user-count');
    if (counterEl) {
        counterEl.textContent = count;
        counterEl.style.display = count > 0 ? 'inline-block' : 'none';
    }
}