const input = document.getElementById('ingresar-tarea');
const boton = document.querySelector('button'); // Selecciona el primer elemento
const listaDeTarea = document.getElementById('lista-de-tareas');

function agregarTarea() {
  if (input.value) {
    // crear tarea
    let tareaNueva = document.createElement('div');
    tareaNueva.classList.add('tarea');

    // Texto ingresado por el usuario
    let texto = document.createElement('p');
    texto.innerText = input.value;
    tareaNueva.appendChild(texto);

    // Crear y agregar contenedor de iconos
    let iconos = document.createElement('div');
    iconos.classList.add('iconos');
    tareaNueva.appendChild(iconos)
  }
}