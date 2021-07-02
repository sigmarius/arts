const calc = (size, material, options, promocode, result) => {
    const sizeBlock = document.querySelector(size),
          materialBlock = document.querySelector(material),
          optionsBlock = document.querySelector(options),
          promocodeBlock = document.querySelector(promocode),
          resultBlock = document.querySelector(result);

    let sum = 0;

    // константа для хранения значения промокода
    const promoCode = 'IWANTPOPART',
          discountPrice = 0.7; // скидка 30%

    const calcFunc = () => {
        // преобразуем строку из value в число через +
        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

        if (sizeBlock.value == '' || materialBlock.value == '') {
            resultBlock.textContent = 'Пожалуйста выберите размер и материал картины';
        } else if (promocodeBlock.value === promoCode) {
            // если пользователь ввел промокод, применяется цена со скидкой
            resultBlock.textContent = Math.round(sum * discountPrice);
        } else {
            resultBlock.textContent = sum;
        }
    };

    sizeBlock.addEventListener('change', calcFunc);
    materialBlock.addEventListener('change', calcFunc);
    optionsBlock.addEventListener('change', calcFunc);
    promocodeBlock.addEventListener('input', calcFunc);
};

export default calc;
