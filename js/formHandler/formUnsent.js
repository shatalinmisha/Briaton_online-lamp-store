
export default function formUnsent() {
    const resultHTML = `
        <div id="errorModal" class="modal">
            <div class="modal__content">
            <span id="closeErrorModal" class="modal__close">&times;</span>
            <p class="modal__text">Что-то пошло не так. Попробуйте еще раз.</p>
            </div>
        </div>
        `
    // Добавляем модальное окно в конец body
    document.body.insertAdjacentHTML('beforeend', resultHTML);

    // Показать модальное окно с ошибкой отправки
    const errorModal = document.getElementById('errorModal');
    errorModal.style.display = 'Flex';

    // Закрыть модальное окно по клику
    const closeErrorModal = document.getElementById('closeErrorModal');
    closeErrorModal.addEventListener('click', () => {
        errorModal.style.display = 'none';
    });

    // Закрыть модальное окно, если кликнуть вне области окна
    window.addEventListener('click', (event) => {
        if (event.target === errorModal) {
            errorModal.style.display = 'none';
        }
    });
}