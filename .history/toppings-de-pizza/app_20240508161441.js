/*
const primerTopping = document.querySelector('.topping');

console.log(primerTopping.style);
* Cambiando el estilo con javascript
primerTopping.style.backgroundColor = 'blue';
primerTopping.style.color = '#6dff00';
primerTopping.style.textTransform = 'uppercase';
*/

// const listaDeToppings = document.getElementById('lista-toppings')
// innerText - textContent -> retorna texto
// innerHTML -> retorna los elementos HTML

/*
* Modificar contenido de elemento
const titulo = document.getElementById('titulo');
titulo.innerText = 'Mis Toppings Favoritos';
*/

const enlaces = document.getElementsByTagName('a')
// console.log(enlaces[0].getAttribute('href')) // * removeAttribute
// console.log(enlaces[0].getAttribute('href', 'Modificar el atributo'))

/*
* AGREGAR/MODIFICAR CLASES
*/
const primerTopping = document.querySelector('.topping');
primerTopping.classList.add('texto-verde');
console.log(primerTopping.classList);