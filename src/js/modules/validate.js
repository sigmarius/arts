const validateInputs = (selector) => {
    const txtInputs = document.querySelectorAll(selector);

   txtInputs.forEach(item => {
        item.addEventListener('keypress', (evt) => {
            // ищем глобально все русские буквы и цифры
            if (evt.key.match(/[^а-яё 0-9]/ig)) {
                evt.preventDefault();
            }
        });
    });
};

export default validateInputs;
