const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]'),
            // исправляет прыгающий скролл при вызове модального окна
            scroll = calcScroll();

        trigger.forEach(item => {
            item.addEventListener('click', (evt) => {
                if (evt.target) {
                    evt.preventDefault();
                }

                windows.forEach(item => {
                    item.style.display = 'none';
                });

                modal.style.display = "block";
                document.body.style.overflow = 'hidden';
                // document.body.classList.add('modal-open');

                document.body.style.marginRight = `${scroll}px`;
            });
        });

        close.addEventListener('click', () => {
            windows.forEach(item => {
                item.style.display = 'none';
            });

            modal.style.display = "none";
            document.body.style.overflow = '';
            // document.body.classList.remove('modal-open');

            document.body.style.marginRight = `0px`;
        });

        modal.addEventListener('click', (evt) => {
            if (evt.target === modal && closeClickOverlay) {
                windows.forEach(item => {
                    item.style.display = 'none';
                });

                modal.style.display = "none";
                document.body.style.overflow = '';
                // document.body.classList.remove('modal-open');

                document.body.style.marginRight = `0px`;
            }
        });
    }

    function showModalByTime(selector, time) {
        setTimeout(function () {
            let display;

            document.querySelectorAll('[data-modal]').forEach(item => {
                if (getComputedStyle(item).display !== 'none') {
                    display = 'block';
                }
            });

            if (!display) {
                document.querySelector(selector).style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        }, time);
    }

    // вспомогательная функция - рассчитывает ширину области прыгающего при вызове модального окна скролла
    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);

        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');

    showModalByTime('.popup-consultation', 5000);
};

export default modals;
