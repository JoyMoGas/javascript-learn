const toppings = document.getElementsByClassName('topping');

function mostrarClic (e) {
    console.log(e.target.innerText, 'click on it')
}
for (const topping of toppings){
    console.log(topping)
}

albahaca.addEventListener('click', mostrarClic);