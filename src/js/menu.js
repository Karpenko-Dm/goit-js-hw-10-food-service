import cardTemplate from '../templates/menu-hb.hbs';
import menuCards from '../menu.json'

const menu = document.querySelector('.js-menu');

menu.insertAdjacentHTML('beforeend', cardTemplate(menuCards));