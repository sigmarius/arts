const validateInputs = (selector) => {
    const numberInputs = document.querySelectorAll(selector);

    numberInputs.forEach(item => {
        item.addEventListener('input', () => {
            // ищем все, что не является цифрами
            item.value = item.value.replace(/\D/, '');
        });
    });
};

export default validateInputs;
