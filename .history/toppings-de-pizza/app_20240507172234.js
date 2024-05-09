
/* // * getElementById
const titulo = document.getElementById('titulo');
console.log(titulo.innerText)
*/

/* // * getElementByClassName
const toppings = document.getElementsByClassName('topping');
console.log(toppings[0]) toppings[0].id // * Selecciona el primer elemento del Array
console.log(toppings);
*/

/* //* getElementByTagName
const misToppings = document.getElementsByTagName('li');
console.log(misToppings)

const misToppingsMarron = document.getElementsByClassName('fondo-marron')
console.log(misToppingsMarron)
*/

/* // * querySelector
const aceitunas = document.querySelector('#aceitunas'); 
    .topping.fondo-naranja
    ul li.fondo-naranja
    ul li:not(.fondo-marron) //* Selecciona todos menos con fondo-marron
console.log(aceitunas)
*/

// * querySelectorAll

const toppingsNaranja = document.querySelectorAll('.topping.fondo-naranja');
console.log(toppingsNaranja)