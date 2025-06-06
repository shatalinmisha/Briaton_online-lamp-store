
export default async function updateFilterCounts() {
    // Загружаем данные
    const response = await fetch('./data/data.json');
    const data = await response.json();

    // Подсчитываем количество товаров по типу
    const typeCounts = {};

    data.forEach(product => {
            product.type.forEach(type => {
                typeCounts[type] = (typeCounts[type] || 0) + 1;
            });
    });

    // Обновляем отображение фильтров
    let filterInputsEl = document.querySelectorAll('input[name="type"]');// Получаем все элементы

    filterInputsEl.forEach(input => {
        const type = input.value;
        const count = typeCounts[type] || 0;

        // Получаем <label> по атрибуту for
        const labelEl = document.querySelector(`label[for="${input.id}"]`);

        if (labelEl) {
            const countEl = labelEl.querySelector('.custom-checkbox__count');

            if(countEl) {
                countEl.textContent = count;
            }
        }

        // Отключаем чекбокс, если товаров нет
        input.disabled = count === 0;
    });
}