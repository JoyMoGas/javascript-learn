const toppings = document.getElementsByClassName('topping');

/*
function mostrarClic (e) {
    console.log(e.target.innerText, 'click on it');
}
*/

for (const topping of toppings){
    //console.log(topping)
    //topping.addEventListener('click', mostrarClic);
    topping.addEventListener('click', (e) => {
        console.log(e.target.innerText, 'click on it');
    });
}