/*
|--------------------------------------------------------------------------
| EVENTS....
|--------------------------------------------------------------------------
*/

import { handleReset, handleTheterItemClick } from './functions';

handleReset(); // Chamada da função reset.

const tetherReset = document.querySelector('.tether__reset');
tetherReset.addEventListener('click', handleReset); // Atribui um evento de click ao elemento reset__.

const tetherItems = document.querySelectorAll('.tether__item');
tetherItems.forEach(element => { // Faz um loop selecionando todos os elementos tether__item.
    element.addEventListener('click', handleTheterItemClick); // Atribui um evento de click a cada elemento, que chama uma função.
});