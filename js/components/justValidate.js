
export function justValidateEl() {
    const validate = new JustValidate('#questionsForm', {
            errorFieldCssClass: 'is-invalid',
            errorLabelStyle: {
                color: '#D11616',
                fontSize: '14px',
            },
        });
        validate.addField('#name', [
            {
                rule: 'required',
                errorMessage: 'Введите имя',
            },
            {
                rule: 'minLength',
                value: 3,
                errorMessage: 'Минимум 3 символа',
            },
            {
                rule: 'maxLength',
                value: 20,
                errorMessage: 'Максимум 20 символов',
            },
        ]);
        validate.addField('#email', [
            {
                rule: 'required',
                errorMessage: 'Введите имя',
            },
            {
                rule: 'email',
                errorMessage: 'Почта введена не верно!',
            },
        ]);
        validate.addField('#agree', [
            {
                rule: 'required',
                errorMessage: 'Требуеться согласие',
            },
        ]);
}
