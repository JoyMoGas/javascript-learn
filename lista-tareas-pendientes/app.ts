// Selección de elementos del DOM con tipos específicos
const input = document.getElementById('ingresar-tarea') as HTMLInputElement;
const boton = document.querySelector('button') as HTMLButtonElement;
const listaDeTarea = document.getElementById('lista-de-tareas') as HTMLDivElement;

function agregarTarea(): void {
  if (input.value) {
    // Crear tarea
    const tareaNueva = document.createElement('div');
    tareaNueva.classList.add('tarea');

    // Texto ingresado por el usuario
    const texto = document.createElement('p');
    texto.innerText = input.value;
    tareaNueva.appendChild(texto);

    // Crear y agregar contenedor de iconos
    const iconos = document.createElement('div');
    iconos.classList.add('iconos');
    tareaNueva.appendChild(iconos);

    // Iconos
    const completar = document.createElement('i');
    completar.classList.add('bi', 'bi-check-circle-fill', 'icono-completar');
    completar.addEventListener('click', completarTarea);

    const eliminar = document.createElement('i');
    eliminar.classList.add('bi', 'bi-trash3-fill', 'icono-eliminar');
    eliminar.addEventListener('click', eliminarTarea);

    iconos.append(completar, eliminar);

    // Agregar tarea a la lista
    listaDeTarea.appendChild(tareaNueva);

    // Limpiar el input después de agregar la tarea
    input.value = '';
  } else {
    alert('Por favor ingresa una tarea');
  }
}

function completarTarea(e: MouseEvent): void {
  const tarea = (e.target as HTMLElement).parentNode?.parentNode as HTMLDivElement;
  tarea.classList.toggle('completada');
}

function eliminarTarea(e: MouseEvent): void {
  const tarea = (e.target as HTMLElement).parentNode?.parentNode as HTMLDivElement;
  tarea.remove();
}

boton.addEventListener('click', agregarTarea);

input.addEventListener('keydown', (e: KeyboardEvent) => {
  if (e.key === 'Enter') {
    agregarTarea();
  }
});