const toppings = document.getElementsByClassName('topping');

function mostrarClic (e) {
    console.log(e.target.innerText, 'click on it')
}
for (const topping of toppings){
    console.log(toppings)
}

albahaca.addEventListener('click', mostrarClic);