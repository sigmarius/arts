import { getResource } from "../services/requests";

const loadFromServer = (trigger, wrapper) => {
    const btn = document.querySelector(trigger);

    // обращение через сервер
    // btn.addEventListener('click', function() {
    //     getResource('http://localhost:3000/styles')
    //         .then(res => createCards(res))
    //         .catch(error => console.log(error));

    //     this.remove();
    // });  
    
    // обращение напрямую к файлу db.json
    btn.addEventListener('click', function() {
        getResource('assets/db.json')
        // обращаемся к свойству styles в файле
            .then(res => createCards(res.styles))
            .catch(error => console.log(error));

        this.remove();
    });
    
    function createCards(response) {
        // деструктуризация item => {src, title, link}
        response.forEach(({src, title, link}) => {
            let card = document.createElement('div');

            card.classList.add('animated', 'fadeInUp','col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

            card.innerHTML = `
                <div class="styles-block">
                    <img src="${src}" alt="style">
                    <h4>${title}</h4>
                    <a href="${link}">Подробнее</a>
				</div>
            `;

            // обертка, в которую помещаются созданные карточки
            document.querySelector(wrapper).appendChild(card);
        });
    }
};

export default loadFromServer;
