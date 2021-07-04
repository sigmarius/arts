const scrolling = (upSelector) => {
    const upElem = document.querySelector(upSelector);

    window.addEventListener('scroll', () => {
        // скрытое сверху расстояние, которое мы уже пролистали
        if (document.documentElement.scrollTop > 1650) {
            upElem.classList.add('animated', 'fadeIn');
            upElem.classList.remove('fadeOut');
        } else {
            upElem.classList.add('fadeOut');
            upElem.classList.remove('fadeIn');
        }
    });

    const element = document.documentElement,
        body = document.body;

    const calcScroll = () => {
        upElem.addEventListener('click', function (evt) {
            // сколько мы пролистали сверху
            let scrollTop = Math.round(body.scrollTop || element.scrollTop);

            // hash == id секции (якорь)
            if (this.hash !== '') {
                evt.preventDefault();

                // #up => up получаем от хеша строку без #
                // let hashElement = document.getElementById(this.hash.substring(1));

                // или проще #up => up
                let hashElement = document.querySelector(this.hash),
                // сколько пикселей нужно пролистать до родителя hashElement?
                    hashElementTop = 0;

                // offsetParent - элемент, относительно которого позиционируется hashElement (его родитель)
                while (hashElement.offsetParent) {
                    hashElementTop += hashElement.offsetTop;
                    hashElement = hashElement.offsetParent;
                }

                hashElementTop = Math.round(hashElementTop);

                smoothScroll(scrollTop, hashElementTop, this.hash);
            }
        });
    };

    const smoothScroll = (from, to, hash) => {
        let timeInterval = 1,
            prevScrollTop,
            speed; // скорость анимации

        // определяет направление скрола
        if (to > from) {
            speed = 30;
        } else {
            speed = -30;
        }

        let move = setInterval(function() {
           let scrollTop = Math.round(body.scrollTop || element.scrollTop);

           if (
               prevScrollTop === scrollTop ||
               (to > from && scrollTop >= to) ||
               (to < from && scrollTop <= to)
            ) {
                clearInterval(move);    
                history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
           } else {
               body.scrollTop += speed;
               element.scrollTop += speed;
               prevScrollTop = scrollTop;
           }
        }, timeInterval);
    };

    calcScroll();
};

export default scrolling;
