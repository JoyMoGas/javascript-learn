const albahaca = document.getElementById('albahaca');

function mostrarClic (e) {
    console.log(e.target.innerText)
}

albahaca.addEventListener('click', mostrarClic);