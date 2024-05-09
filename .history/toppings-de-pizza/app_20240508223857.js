const albahaca = document.getElementById('albahaca');

function mostrarClic (e) {
    console.log(e.target.innerText + 'click on it')
}

albahaca.addEventListener('click', mostrarClic);