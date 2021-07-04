const pictureSize = (imgSelector) => {
    const blocks = document.querySelectorAll(imgSelector);

    function showImg(block) {
        const img = block.querySelector('img');
        // something.png => something-1.png
        // количество символов с конца, которые будем отрезать
        img.src = img.src.slice(0, -4) + '-1.png';

        // скрываем все параграфы, кроме p.sizes-hit
        block.querySelectorAll('p:not(.sizes-hit').forEach(p => {
            p.style.display = 'none';
        });
    }

    function hideImg(block) {
        const img = block.querySelector('img');
        // something-1.png => something.png
        // количество символов с конца, которые будем отрезать
        img.src = img.src.slice(0, -6) + '.png';

        // скрываем все параграфы, кроме p.sizes-hit
        block.querySelectorAll('p:not(.sizes-hit').forEach(p => {
            p.style.display = 'block';
        });
    }

    blocks.forEach(block => {
        block.addEventListener('mouseover', () => {
            showImg(block);
        });
    });

        blocks.forEach(block => {
        block.addEventListener('mouseout', () => {
            hideImg(block);
        });
    });
};

export default pictureSize;
