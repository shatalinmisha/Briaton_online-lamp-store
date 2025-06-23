    
    export default function formSent() {
        const resultHTML = `
        <div id="successModal" class="modal">
            <div class="modal__content">
                <span id="closeSuccessModal" class="modal__close">&times;</span>
                <p class="modal__text">Спасибо, ваша информация отправлена.</p>
            </div>
        </div>
        `;
        // Добавляем модальное окно в конец body
        document.body.insertAdjacentHTML('beforeend', resultHTML);

        // Показать модальное окно с успешной отправкой
        const successModal = document.getElementById('successModal');
        successModal.style.display = 'Flex';

        // Закрыть модальное окно по клику
        const closeSuccessModal = document.getElementById('closeSuccessModal');
        closeSuccessModal.addEventListener('click', () => {
            successModal.style.display = 'none';
        });

        // Закрыть модальное окно, если кликнуть вне области окна
        window.addEventListener('click', (event) => {
            if (event.target === successModal) {
                successModal.style.display = 'none';
            }
        });
    }