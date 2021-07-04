const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
        // нашли все пункты меню
        items = menu.querySelectorAll('li'),
        wrapper = document.querySelector('.portfolio-wrapper'),
        // нашли все соответствующие элементы в разметке
        markAll = wrapper.querySelectorAll('.all'),
        no = document.querySelector('.portfolio-no');

    const typeFilter = (markType) => {
        markAll.forEach(mark => {
            mark.style.display = 'none';
            mark.classList.remove('animated', 'fadeIn');
        });

        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIn');

        if (markType.length !== 0) {
            markType.forEach(mark => {
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadeIn');
            });
        } else {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        }
    };

    menu.addEventListener('click', (evt) => {
        let target = evt.target,
            targetClass = target.classList[0],
            // находим все элементы по классу targetClass
            elements = wrapper.querySelectorAll(`.${targetClass}`);

        if (target && target.tagName == 'LI') {
            items.forEach(btn => btn.classList.remove('active'));
            target.classList.add('active');
            typeFilter(elements);
        }
    });
};

export default filter;
