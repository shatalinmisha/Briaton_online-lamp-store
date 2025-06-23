import addClient from "../server/addClient.js";
import formSent from "./formSent.js";
import formUnsent from "./formUnsent.js";

export default function formHandler(formEl) {

    let name = document.querySelector('#name').value.trim();
    let email = document.querySelector('#email').value.trim();
    // Проверка полей ввода
    let hasError = false;
    const inputEl = document.querySelectorAll('input:not([type="checkbox"])');
    inputEl.forEach(input => {
        if (input.value.length < 3) {
            hasError = true;
        }
    });
    // Проверка чекбокса
    let agree = document.getElementById("agree");
    if (!agree.checked) {
        hasError = true;
    }

    if (hasError) {
        return
    }
    formEl.reset();
    const client = {
        name: name,
        email: email,
    }
    addClient(client, email)
        .then((data) => {
            // Успешная отправка
            formEl.reset();
            formSent();
        })
        .catch((error) => {
            // Ошибка отправки
            formUnsent();
        });
}