'use strict'

const square = document.querySelector('.square');

square.addEventListener('click', () => {
    square.style.width = '300px';
    square.style.height = '300px';
    square.style.backgroundColor = 'red';
});