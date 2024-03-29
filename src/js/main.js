import modals from "./modules/modals";
import sliders from "./modules/sliders";
import forms from "./modules/forms";
import mask from "./modules/mask";
import validateInputs from "./modules/validate";
// подгрузка элементов из верстки
import showMoreStyles from "./modules/showMoreStyles";
import loadFromServer from "./modules/loadFromServer";
import calc from "./modules/calc";
import filter from "./modules/filter";
import pictureSize from "./modules/pictureSize";
import accordion from "./modules/accordion";
import burger from "./modules/burger";

// скролинг на чистом JS
import scrolling from "./modules/scrolling";
import requestAnimation from "./modules/requestAnimation";
import drop from "./modules/drop";

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    modals();
    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical');
    forms();
    mask('[name="phone"]');
    validateInputs('[name="name"]');
    validateInputs('[name="message"]');

    // подгрузка элементов из верстки
    // showMoreStyles('.button-styles', '.styles-2');

    // подгрузка элементов с сервера db.json
    loadFromServer('.button-styles', '#styles .row');

    calc('#size', '#material', '#options', '.promocode', '.calc-price');
    filter();
    pictureSize('.sizes-block');
    accordion('.accordion-heading');
    burger('.burger-menu', '.burger');
    // скролинг на чистом JS
    // scrolling('.pageup');
    requestAnimation('.pageup');
    drop();
});
