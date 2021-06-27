const sliders = (slides, direction, prev, next) => {
    let slideIndex = 1, // начальный слайд
        paused = false; // автовоспроизведение остановлено

    const items = document.querySelectorAll(slides);

    function showSlides(n) {
        if (n > items.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = items.length;
        }

        items.forEach(item => {
            item.classList.add('animated');
            item.style.display = "none";
        });

        items[slideIndex - 1].style.display = 'block';
    }

    showSlides(slideIndex);

    function changeSlides(n) {
        // n - шаг слайдера
        showSlides(slideIndex += n);
    }

    try {
        const prevBtn = document.querySelector(prev),
            nextBtn = document.querySelector(next);

        prevBtn.addEventListener('click', () => {
            changeSlides(-1);
            items[slideIndex - 1].classList.remove('slideInLeft');
            items[slideIndex - 1].classList.add('slideInRight');
        });
        nextBtn.addEventListener('click', () => {
            changeSlides(1);
            items[slideIndex - 1].classList.remove('slideInRight');
            items[slideIndex - 1].classList.add('slideInLeft');
        });
    } catch (evt) {

    }

    // отключает автопрокрутку, когда курсор находится в зоне слайдера
    function activateAnimation() {
        if (direction === 'vertical') {
            paused = setInterval(function () {
                changeSlides(1);
                items[slideIndex - 1].classList.add('slideInDown');
            }, 3000);
        } else {
            paused = setInterval(function () {
                changeSlides(1);
                items[slideIndex - 1].classList.remove('slideInRight');
                items[slideIndex - 1].classList.add('slideInLeft');
            }, 3000);
        }
    }

    // первичная инициализация анимации
    activateAnimation();

    items[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });
    items[0].parentNode.addEventListener('mouseleave', () => {
        activateAnimation();
    });
};

export default sliders;
