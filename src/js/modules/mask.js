const mask = (selector) => {

    let setCursorPosition = (position, elem) => {
      elem.focus();

      if (elem.setSelectionRange) {
        elem.setSelectionRange(position, position);
      } else if (elem.createTextRange) {
          let range = elem.createTextRange();

          range.collapse(true);
          range.moveEnd('character', position);
          range.moveStart('character', position);
          range.select();
      }
    };

    function createMask(evt) {
        let matrix = '+7 (___) ___ __ __',
            i = 0,
            // глобально (g) заменяет все, что не цифры на пустую строку
            def = matrix.replace(/\D/g, ''),
            val = this.value.replace(/\D/g, '');

        // не даст пользователю удалить штатные элементы маски +, 7 и др, заданные в matrix    
        if (def.length >= val.length) {
            val = def;
        }

        // проверяем, соответствует ли каждый символ матрицы (/./g) ключам matrixKey
        this.value = matrix.replace(/./g, function(matrixKey) {
            return /[_\d]/.test(matrixKey) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : matrixKey;
        });

        if (evt.type === 'blur') {
            if (this.value.length == 2) {
                this.value = '';
            }
        } else {
            setCursorPosition(this.value.length, this);
        }
    }

    let inputs = document.querySelectorAll(selector);

    inputs.forEach(item => {
        item.addEventListener('input', createMask);
        item.addEventListener('focus', createMask);
        item.addEventListener('blur', createMask);
    });

};

export default mask;
